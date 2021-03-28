import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton as NavHeaderButton } from 'react-navigation-header-buttons';

import colors from '../constants/colors';

const HeaderButton = (props) => {
  return (
    <NavHeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={16}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
    />
  );
};

export default HeaderButton;
