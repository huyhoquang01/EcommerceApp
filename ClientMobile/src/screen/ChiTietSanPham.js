import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const ChiTietSanPham = ({ navigation, route }) => {
    let product = route.params.item;
    const formatDate = (a) => {
        let date = new Date(a);
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let year = date.getFullYear();
        let month = m.toString().length == 1 ? '0' + m : m;
        let day = d.toString().length == 1 ? '0' + d : d;
        return year + '-' + month + '-' + day;
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text onPress={() => navigation.goBack()} style={{ flex: 1, color: 'white', fontSize: 20, }}>Back</Text>
                <Text style={{ textAlign: 'center', fontSize: 25, flex: 1, fontWeight: 'bold', color: 'white' }}>Detail</Text>
                <View style={{ flex: 1, }}></View>
            </View>


            <View style={{ margin: 16, flex: 1 }}>
                <View style={{ marginBottom: 8 }}>
                    <Text style={styles.category}>{product.idLoaiSP.categoryName}</Text>
                </View>

                <Text>{formatDate(product.published)}</Text>

                <Image style={{ width: "100%", aspectRatio: 3 / 2, resizeMode: 'cover' }} source={{ uri: "http://10.82.140.46:3000/images/" + product.img }} />

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.product}>{product.productName}</Text>
                    <Text style={{ textAlign: 'center' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>

                </View>

                <View style={{ justifyContent: 'flex-end', bottom: 0, flex: 1 }}>
                    <View style={{ alignItems: 'center', paddingVertical: 32 }}>
                        <Text>Price</Text>
                        <Text style={styles.price}>$ {product.price}</Text>
                    </View>
                    <Button
                        color='#6700b5'
                        title="Add to cart"
                    />
                </View>

            </View>


        </View>
    )
}

export default ChiTietSanPham

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        paddingHorizontal: 8,
        marginBottom: 8,
        borderBottomStartRadius: 15,
        alignItems: 'center',
        borderBottomEndRadius: 15,
        paddingVertical: 16,
        backgroundColor: '#6700b5',
        flexDirection: 'row'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    product: {
        fontSize: 32,

    },
    price: {
        color: 'red',
        fontSize: 32,
    },
    category: {
        fontSize: 20,
        alignSelf: 'flex-start',
        backgroundColor: "#f1f1f1",
        padding: 4,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 5,
    }
})
