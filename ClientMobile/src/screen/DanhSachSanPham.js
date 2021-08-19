import React, { useEffect, useState } from 'react'
import { Dimensions, Image, FlatList, SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({ item, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate("Detail", { item })}>
        <View style={styles.item}>
            <View style={{ flex: 1 }}>
                <Image source={{ uri: "http://10.82.140.46:3000/images/" + item.img }} style={styles.imageProduct} />

                <Text numberOfLines={2} style={styles.productName}>{item.productName}</Text>
                <Text style={styles.price}>{numberWithCommas(item.price) + " $"}</Text>
            </View>
        </View>
    </TouchableHighlight>
);

const DanhSachSanPham = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item item={item} navigation={navigation} />
    );

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                // 192.168.1.7
                // 10.82.140.46
                let response = await fetch("http://192.168.1.7:3000/api")
                let json = await response.json();
                setData(json)
            } catch (error) {
                console.error(error);
            }
        }
        getData();

    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#6700b5', borderBottomStartRadius: 15, borderBottomEndRadius: 15, paddingVertical: 16, marginBottom: 16}}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>List products</Text>
            </View>
        
            <FlatList
                style={{backgroundColor: '#f1f1f1', borderRadius: 15}}
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{backgroundColor: '#0000ff', height: 3, alignSelf: 'center', justifyContent: 'flex-end', marginBottom: 7, borderRadius: 10, width: windowWidth/3}}></View>
            <View style={{justifyContent: 'flex-end', bottom: 0, height: 50, backgroundColor: '#6700b5'}}></View>
        </SafeAreaView>
    )
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        width: windowWidth / 2 - 32,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 9,
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 5,

    },
    title: {
        fontSize: 17,
        width: 100,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6700b5',
    },
    imageProduct: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
});

export default DanhSachSanPham
