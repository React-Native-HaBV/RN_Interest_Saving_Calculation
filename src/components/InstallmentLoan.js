/************************************************************************
 * File : InstallmentLoan.js
 * Date: 16 - Jun - 2020
 * Project: Saving Calculation
 * Author: HaBV
 * Description: Cách tính số tiền cần trả một tháng cho ngân hàng khi vay trả góp một số tiền từ ngân hàng
 ************************************************************************/

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import NumberFormat from "react-number-format";

const InstallmentLoan = () => {
	const [money, setMoney] = useState(''); // Số tiền gửi
	const [interestRate, setInterestRate] = useState(''); // Lãi suất
	const [profit, setProfit] = useState('');
	const [time, setTime] = useState();

	function string_to_number(text){
		if(!text){return 0;}
		text = text.split(',').join('');
		text = text.split('.').join('.');
		return Number(text.replace(/[^0-9.]/g, ""));
	}

	useEffect(() => {
		let Tien_Vay = parseFloat(string_to_number(money));
		let Lai_Suat_Thang = (parseFloat(interestRate)/100)/12;
		let Thoi_Gian_Vay = parseFloat(time);

		let result_Top = Tien_Vay * ((1 + Lai_Suat_Thang) ** Thoi_Gian_Vay) * Lai_Suat_Thang
		let result_Bottom = ((1 + Lai_Suat_Thang) ** Thoi_Gian_Vay) - 1;
		let value = (parseFloat(result_Top) / parseFloat(result_Bottom));
		setProfit(value);
	}, [money, interestRate, time]);

	return (
		<View style={styles.container}>
			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Số tiền vay </Text>
				</View>
				<View style={styles.inputView}>
					<NumberFormat
						value={money}
						displayType={'text'}
						thousandSeparator={true}
						renderText={ value => (
							<TextInput
								style={styles.inputStyle}
								placeholder={'Nhập số tiền muốn vay'}
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

			{/*<View style={styles.containerItem}>*/}
			{/*	<View style={styles.labelView}>*/}
			{/*		<Text style={styles.labelStyle}> Kỳ hạn </Text>*/}
			{/*	</View>*/}
			{/*	<View style={styles.inputView}>*/}
			{/*		<TextInput*/}
			{/*			style={styles.inputStyle}*/}
			{/*			placeholder={'Nhập kỳ hạn'}*/}
			{/*			returnKeyType={'done'}*/}
			{/*			autoFocus={true}*/}
			{/*			autoCapitalize="none"*/}
			{/*			autoCorrect={false}*/}
			{/*			keyboardType={'numeric'}*/}
			{/*			dataDetectorTypes='phoneNumber'*/}
			{/*			value={term}*/}
			{/*			onChangeText={setTerm}*/}
			{/*		/>*/}
			{/*	</View>*/}
			{/*	<View style={styles.rightTextView}>*/}
			{/*		<Text style={styles.rightTextStyle}> Tháng </Text>*/}
			{/*	</View>*/}
			{/*</View>*/}

			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Thời gian vay </Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputStyle}
						placeholder={'Nhập thời gian vay'}
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
					<Text style={styles.labelStyle}> Trả nợ </Text>
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
						: <Text style={{fontSize: 15, marginLeft: 20, color: '#CCCCCE'}}> Số tiền phải trả </Text>
					}
				</View>
				<View style={styles.rightTextView}>
					<Text style={styles.rightTextStyle}> / Tháng </Text>
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
		borderBottomColor: '#CCCCCE',
		marginHorizontal: 20,
		// backgroundColor: 'gray'
	},
	labelView: {
		width: '30%',
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
		width: '50%',
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

export default InstallmentLoan;
