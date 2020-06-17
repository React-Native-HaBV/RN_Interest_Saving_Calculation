import React, {useState} from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Card, CardSection, Header, MyInput, MyButton, Separator, Spacer} from "../components/general";
import NormalInterest from "../components/NormalInterest";
import CompoundInterest from "../components/CompoundInterest";
import {ButtonGroup} from "react-native-elements";

const Home = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const Button1 = () => {
		return (
			<View style={{flex: 1, justifyContent: 'center'}}>
				<Text style={styles.textButtonStyle}> Lãi thường </Text>
			</View>
		);
	};
	const Button2 = () => {
		return (
			<View style={{flex: 1, justifyContent: 'center'}}>
				<Text style={styles.textButtonStyle}> Lãi kép </Text>
			</View>
		);
	};

	const buttons = [{element: Button1}, {element: Button2}];

	const displayView = () => {
		switch (selectedIndex) {
			case 0:
				return <NormalInterest/>
			case 1:
				return <CompoundInterest/>
		}
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<View style={styles.containerHeader}>
						<Header name={'Tính lãi tiết kiệm'}/>
					</View>
					<View style={styles.containerButton}>
						{/*<MyButton*/}
						{/*	onpress={setSelectedIndex}*/}
						{/*	label={'Lãi thường'}*/}
						{/*	labelStyle={{*/}
						{/*		fontSize: 15*/}
						{/*	}}*/}
						{/*	containerStyle={{*/}
						{/*		height: 20,*/}
						{/*		justifyContent: 'center',*/}
						{/*		marginHorizontal: 10*/}
						{/*	}}*/}
						{/*/>*/}
						{/*<MyButton*/}
						{/*	label={'Lãi kép'}*/}
						{/*	labelStyle={{*/}
						{/*		fontSize: 15*/}
						{/*	}}*/}
						{/*	containerStyle={{*/}
						{/*		height: 20,*/}
						{/*		justifyContent: 'center',*/}
						{/*		marginHorizontal: 10*/}
						{/*	}}*/}
						{/*/>*/}
						<ButtonGroup
							buttons={buttons}
							onPress={setSelectedIndex}
							selectedIndex={selectedIndex}
							containerStyle={styles.buttonView}
							// selectedButtonStyle={{backgroundColor: 'transparent'}}
							innerBorderStyle={{width: 0, color: 'transparent'}}
							selectedTextStyle={{color:'#FFFFFF'}}
							textStyle={{color: '#F27224'}}
						/>
					</View>

					<View style={styles.containerContent}>
						{displayView()}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerHeader: {
		flex: 1,
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
	},
	containerContent: {
		flex: 8,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 10,
		// borderTopColor: 'gray',
		// borderTopWidth: 1,
		// borderBottomColor: 'gray',
		// borderBottomWidth: 1,
	},
	containerButton: {
		flex: 1,
		justifyContent: 'space-around',
		// alignContent: 'center',
		marginVertical: 10,
		borderBottomColor: 'blue',
		borderBottomWidth: 1,
		borderTopColor: 'blue',
		borderTopWidth: 1,
		marginHorizontal: 10
	},
	buttonView: {
		flexDirection: 'column',
		// alignContent: 'center',
		alignItems: 'flex-start',
		height: 70,
	},
	textButtonStyle: {
		width: '100%'
	}
});
export default Home;
