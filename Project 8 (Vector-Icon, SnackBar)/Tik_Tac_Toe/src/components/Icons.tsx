
import React from 'react'
import type { PropsWithChildren } from 'react'
//                                                      npm i @types/react-native-vector-icons for types installing
import Icon from 'react-native-vector-icons/FontAwesome'        // Error because we didn't install its type like FontAwesome
                                                                
type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconsProps) => {
  switch (name) {
    case 'circle':
        return <Icon name="check-circle" size={38} color="#38CC77" />
        break;
    case 'cross':
        return <Icon name="times" size={38} color="#EE4B2B" />
        break;
  
    default:
      return <Icon name="question" size={38} color="#0D0D0D" />
  }
}

export default Icons