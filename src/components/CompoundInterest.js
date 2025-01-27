/************************************************************************
 * File : CompoundInterest.js
 * Date: 16 - Jun - 2020
 * Project: Saving Calculation
 * Author: HaBV
 * Description: Cách tính lãi kép khi gửi một số tiền vào ngân hàng.
 * ( tiền lãi hàng tháng + vào tiền gốc và tĩnh lãi tháng tiếp theo trên tổng số tiền)
 ************************************************************************/

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import NumberFormat from "react-number-format";

const CompoundInterest = () => {
	const [money, setMoney] = useState(''); // Số tiền gửi
	const [interestRate, setInterestRate] = useState(''); // Lãi suất
	const [term, setTerm] = useState(''); // Ky han
	const [profit, setProfit] = useState('');
	const [time, setTime] = useState();

	function string_to_number(text){
		if(!text){return 0;}
		text = text.split(',').join('');
		text = text.split('.').join('.');
		return Number(text.replace(/[^0-9.]/g, ""));
	}

	useEffect(() => {
		let Tien_Gui = string_to_number(money);
		let SUM_Money = parseFloat(Tien_Gui) * ((1 + parseFloat(interestRate)/100) ** (parseFloat(time)/parseFloat(term)));
		let value = SUM_Money - Tien_Gui;
		setProfit(value);
	}, [money, term, interestRate, time]);

	return (
		<View style={styles.container}>
			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Số tiền </Text>
				</View>
				<View style={styles.inputView}>
					<NumberFormat
						value={money}
						displayType={'text'}
						thousandSeparator={true}
						renderText={ value => (
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
						// autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType={'numeric'}
						dataDetectorTypes='phoneNumber'
						value={interestRate}
						onChangeText={setInterestRate}
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
						// autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType={'numeric'}
						dataDetectorTypes='phoneNumber'
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
					<Text style={styles.labelStyle}> Thời gian gửi </Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputStyle}
						placeholder={'Nhập thời gian gửi'}
						returnKeyType={'done'}
						// autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType={'numeric'}
						dataDetectorTypes='phoneNumber'
						value={time}
						onChangeText={setTime}
					/>
				</View>
				<View style={styles.rightTextView}>
					<Text style={styles.rightTextStyle}> Tháng </Text>
				</View>
			</View>

			<View style={[styles.containerItem, {borderBottomWidth: 0, borderBottomColor: 'transparent'}]}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Tiền lãi </Text>
				</View>
				<View style={styles.inputView}>
					{profit
						? <View>
							<NumberFormat
								value={profit}
								displayType={'text'}
								thousandSeparator={true}
								decimalScale={2}
								renderText={value => (
									<Text style={styles.inputStyle}> {value} </Text>
								)}
							/>
						</View>
						: <Text style={{fontSize: 15, marginLeft: 20, color: '#CCCCCE'}}> Tiền lãi </Text>
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
		// marginVertical: 10,
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
		borderBottomColor: '#CCCCCE',
		marginHorizontal: 20,
		// backgroundColor: 'gray'
	},
	labelView: {
		width: '25%',
		justifyContent: 'center',
		// backgroundColor: 'red'
	},
	labelStyle: {
		fontSize: 15,
		// marginLeft: 20
	},
	inputStyle: {
		fontSize: 15,
		marginLeft: 20
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
		width: '15%',
		justifyContent: 'center',
		// backgroundColor: 'red'
	}
});

export default CompoundInterest;
