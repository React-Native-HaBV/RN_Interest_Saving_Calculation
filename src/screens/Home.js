import React, {useState} from 'react';
import {View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Card, CardSection, Header, MyInput, MyButton, Separator, Spacer} from "../components/general";
import NormalInterest from "../components/NormalInterest";
import CompoundInterest from "../components/CompoundInterest";

const Home = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<View style={styles.containerHeader}>
						{/*<Button> Cai Dat </Button>*/}
						<Header name={'Tính lãi tiết kiệm'}/>
					</View>
					<View style={styles.containerButton}>
						<MyButton
							onpress={setSelectedIndex}
							label={'Lãi thường'}
							labelStyle={{
								fontSize: 15
							}}
							containerStyle={{
								height: 20,
								justifyContent: 'center',
								marginHorizontal: 10
							}}
						/>
						<MyButton
							label={'Lãi kép'}
							labelStyle={{
								fontSize: 15
							}}
							containerStyle={{
								height: 20,
								justifyContent: 'center',
								marginHorizontal: 10
							}}
						/>
					</View>

					<View style={styles.containerContent}>
						<NormalInterest/>
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
		alignContent: 'center',
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		borderTopColor: 'gray',
		borderTopWidth: 1,
		marginTop: 10
	},
	buttonStyle: {
		height: 20,
		marginTop: 10,
		backgroundColor: 'gray'
	}
});
export default Home;
