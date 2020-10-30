import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {peoples, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <PeopleListItem 
                key={item.name.first} 
                people={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Pessoas
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={peoples}
                    renderItem={renderItem}
                    keyExtractor={(item) => {item.name.first}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#e2f977'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#e2a977",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: '#000',
            fontSize: 20
        }
    }
)

export default PeopleList