import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from "react-native";
import KSpacer from "../../components/KSpacer";
import KButton from "../../components/KButton";
import KAuthChoose from "../../components/KAuthChoose";
import {useNavigation} from "@react-navigation/native";

function Landing() {

    const backgroundImage = require('../../assets/photos/wallpaperGreen.png');
    const basketImage = require('../../assets/photos/basket.png');
    const navigator = useNavigation()
    return (
        <View style={landingStyles.container1}>

            <ImageBackground
                style={landingStyles.backgroundImage}
                source={backgroundImage}
                resizeMode="cover"
            >

                <View style={landingStyles.containerImage}>

                    <Image
                        style={landingStyles.basketImage}
                        source={basketImage}
                    />

                </View>

                <View style={landingStyles.containerText}>

                    <Text style={landingStyles.textBolt}>
                        Let’s start your journey
                    </Text>

                    <KSpacer h={20}/>

                    <Text style={landingStyles.textLight}>
                        Your local farmer’s market with{'\n'}natural and local products
                    </Text>

                </View>

                <View style={landingStyles.containerAuth}>

                    <KAuthChoose text={'I’m a local producer'}
                                 photo={require('../../assets/photos/producer.png')}
                    />

                    <KAuthChoose text={'I’m a customer'}
                                 photo={require('../../assets/photos/customer.png')}
                    />
                </View>

                <View style={landingStyles.containerButton}>

                    <KButton route={'Login'} title={'Next'} color={'#45D33D'}/>

                </View>

            </ImageBackground>

        </View>
    )
}

const landingStyles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    containerImage: {
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerAuth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    basketImage: {
        width: '35%',
        height: '45%'
    },
    textBolt: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textLight: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Landing;