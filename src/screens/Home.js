import React, {useState} from 'react';
import {View, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Header } from "../components/general";
import NormalInterest from "../components/NormalInterest";
import CompoundInterest from "../components/CompoundInterest";
import {ButtonGroup} from "react-native-elements";
import InstallmentLoan from "../components/InstallmentLoan";

const Home = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const buttons = ['Lãi thường', 'Lãi kép', 'Vay trả góp'];

	const displayView = () => {
		switch (selectedIndex) {
			case 0:
				return <NormalInterest/>
			case 1:
				return <CompoundInterest/>
			case 2:
				return <InstallmentLoan/>
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
						<ButtonGroup
							buttons={buttons}
							onPress={setSelectedIndex}
							selectedIndex={selectedIndex}
							// selectedIndexes={[0]}
							vertical={true}
							containerStyle={styles.buttonView}
							// selectedButtonStyle={{backgroundColor: 'transparent'}}
							innerBorderStyle={{width: 1, color: 'gray'}}
							selectedTextStyle={styles.selectedTextStyle}
							textStyle={styles.textStyle}
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
		backgroundColor: '#f8f8f8'
	},
	containerHeader: {
		flex: 1,
		// marginTop: 10,
		// borderBottomWidth: 1,
		// borderBottomColor: 'gray',
	},
	containerContent: {
		marginTop: 20,
		backgroundColor: '#f8f8f8',
		flex: 7,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	containerButton: {
		flex: 1.5,
		justifyContent: 'space-around',
		// marginTop: 20,
		// borderBottomColor: 'gray',
		// borderBottomWidth: 1,
		// borderTopColor: 'gray',
		// borderTopWidth: 1,
		// backgroundColor: 'blue'
	},
	buttonView: {
		height: 100,
		// marginVertical: 50,
		borderWidth: 0,
		marginHorizontal: 0,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderBottomColor: 'gray',
		borderTopColor: 'gray'
	},
	selectedButtonStyle: {

	},
	selectedTextStyle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	textStyle: {
		fontSize: 15,
		fontWeight: 'normal',
		color: 'black',
		justifyContent: 'center',
		alignSelf: 'flex-start',
		marginLeft: 10
	}
});
export default Home;
