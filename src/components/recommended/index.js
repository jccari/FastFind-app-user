import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {useRecommended} from '../../hooks';
import Colors from '../../constants/Colors';
import Configs from '../../constants/Configs';

export default function Recommended() {
    const {recommended} = useRecommended();

    if (recommended === null)
        return ;

    return(
      <View style={styles.container}>
          {
              recommended &&
                  recommended.map(item => (
                      <View style={styles.subtitleStyle}>
                          <Text>{item.name}</Text>
                      </View>
                  ))
          }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-start",
        flexWrap: 'wrap',
        // alignItems: "center",
        marginHorizontal: Configs.margins.horizontal,
    },
    subtitleStyle: {
        paddingVertical: 5,
        fontSize: 17,
        color: Colors.secondary,
        // alignSelf: 'flex-start',
        // marginHorizontal: Configs.margins.horizontal,
        paddingHorizontal: 15,
        marginRight: 6,
        marginVertical: 2,
        borderRadius: 10,
        backgroundColor: Colors.white,
    }
});
