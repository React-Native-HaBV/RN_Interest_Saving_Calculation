import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import NumberFormat from "react-number-format";

const NormalInterest = () => {
	const [money, setMoney] = useState(''); // Số tiền gửi
	const [interest, setInterest] = useState(''); // Lãi suất
	const [term, setTerm] = useState(''); // Ky han
	const [result, setResult] = useState('');

	useEffect(() => {
		let value = (parseFloat(money) * (parseFloat(term) / 12) * (parseFloat(interest) / 100));
		setResult(value);
	},[money, term, interest]);

	return (
		<View style={styles.container}>
			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Số tiền </Text>
				</View>
				<View style={styles.inputView}>
					{/*<TextInput*/}
					{/*	style={styles.inputStyle}*/}
					{/*	placeholder={'Nhập số tiền'}*/}
					{/*	returnKeyType={'done'}*/}
					{/*	autoFocus={true}*/}
					{/*	autoCapitalize="none"*/}
					{/*	autoCorrect={false}*/}
					{/*	keyboardType={'numeric'}*/}
					{/*	dataDetectorTypes='phoneNumber'*/}
					{/*	value={money}*/}
					{/*	onChangeText={setMoney}*/}
					{/*/>*/}
					<NumberFormat
						value={money}
						displayType={'text'}
						thousandSeparator={true}
						renderText={value => (
							<TextInput
								style={styles.inputStyle}
								placeholder={'Nhập số tiền'}
								returnKeyType={'done'}
								autoFocus={true}
								autoCapitalize="none"
								autoCorrect={false}
								keyboardType={'numeric'}
								dataDetectorTypes='phoneNumber'
								value={value}
								onChangeText={setMoney}
							/>
						)}
					/>
				</View>
				<View style={styles.rightTextView}>
					<Text style={styles.rightTextStyle}> VND </Text>
				</View>
			</View>

			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Lãi suất </Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputStyle}
						placeholder={'Nhập lãi suất'}
						returnKeyType={'done'}
						autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType={'numeric'}
						value={interest}
						onChangeText={setInterest}
					/>
				</View>
				<View style={styles.rightTextView}>
					<Text style={styles.rightTextStyle}> % năm </Text>
				</View>
			</View>

			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Kỳ hạn </Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputStyle}
						placeholder={'Nhập kỳ hạn'}
						returnKeyType={'done'}
						autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType={'numeric'}
						value={term}
						onChangeText={setTerm}
					/>
				</View>
				<View style={styles.rightTextView}>
					<Text style={styles.rightTextStyle}> Tháng </Text>
				</View>
			</View>

			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Tiền lãi </Text>
				</View>
				<View style={styles.inputView}>
					{result
						? <NumberFormat
							value={result}
							displayType={'text'}
							thousandSeparator={true}
							decimalScale={2}
							renderText={value => (
								<Text style={styles.inputStyle}> {value} </Text>
							)}
						/>
						: <Text style={{fontSize: 15, marginLeft: 40, color: 'gray'}}> Tiền lãi </Text>
					}
				</View>
				<View style={styles.rightTextView}>
					<Text style={styles.rightTextStyle}> VND </Text>
				</View>
			</View>

		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		borderTopColor: 'gray',
		borderTopWidth: 1,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
	},
	containerItem: {
		flexDirection: 'row',
		height: 40,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
		marginHorizontal: 20,
		// backgroundColor: 'gray'
	},
	labelView: {
		width: '20%',
		justifyContent: 'center',
		// backgroundColor: 'red'
	},
	labelStyle: {
		fontSize: 15,
		// marginLeft: 20
	},
	inputStyle: {
		fontSize: 15,
		marginLeft: 40
	},
	inputView: {
		width: '60%',
		justifyContent: 'center',
	},
	rightTextStyle: {
		fontSize: 15,
		alignSelf: 'flex-end',
		// marginRight: 20
	},
	rightTextView: {
		width: '20%',
		justifyContent: 'center',
		// backgroundColor: 'red'
	}
});

export default NormalInterest;
