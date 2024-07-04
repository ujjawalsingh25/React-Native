
// _______________    Vector-Icon  -->> (Provides multiple Icons)  _____________________________ 
// npm i react-native-vector-icons                                                              |
// npm i @types/react-native-vector-icons    -->> For types installation                        |
// ------------------------------------------------------------------                           |
// Add below in android -->> app -->> build.gradle (NOT android -->> build.gradle)              |
// apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")                |
// _____________________________________________________________________________________________|
// Snackbar -->>

import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';


function App(): React.JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(true)         // true -->> X-Player && false -->> O-Player
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  }

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }

  const onChangeItem = (itemNumber : number) => {
    if(gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#008080',
        textColor: '#D22B2B'
      })
    }
    if(gameState[itemNumber] === 'empty'){
      gameState[itemNumber] = isCross ? 'cross' : 'circle'   // if cross then change for circle & if circle selected change to cross
      setIsCross(!isCross)              // flip the switch or change the stste from cross to circle or vice-versa
    } else {
        return Snackbar.show({
          text: "Position is filled already",
          backgroundColor: "008080",
          textColor: '#D22B2B'          
        })
    }
    checkIsWinner();
  } 


  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Tic-Tac-Toe</Text>
      <StatusBar />
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}> {gameWinner} </Text>
        </View>
      ) : (
        <View 
          style={[
            styles.playerInfo,
            isCross ? styles.playerX : styles.playerO     // if cross-player win then style a/c to Cross-Player
          ]}
        >
          <Text style={styles.gameTurnTxt}>
            Player {isCross ? 'X' : 'O'}'s turn
          </Text>
        </View>
      )} 

      {/* _________  Game Grid  ________ */}
      <FlatList 
        style={styles.grid}
        numColumns={3}
        data={gameState}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onChangeItem(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />

      {/* _________  Game Action (Restart Feature)  ________ */}
      <Pressable
        style={styles.gameBtn}
        onPress={reloadGame}
      >
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start New Game' : 'Reload Game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 15,
    marginLeft: '20%',
    paddingHorizontal: 55
  },
  playerInfo: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#EE4B2B',
  },
  playerO: {
    backgroundColor: '#38CC77',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#D6EF09',
    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    marginTop: '5%',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default App;
