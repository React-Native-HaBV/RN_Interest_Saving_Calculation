import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Separator, Spacer} from "./general";

const CompoundInterest = () => {
	return (
		<View style={styles.container}>
			<View style={styles.containerItem}>
				<View style={styles.labelView}>
					<Text style={styles.labelStyle}> Số tiền </Text>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.inputStyle}
						placeholder={'Nhập số tiền'}
						returnKeyType={'next'}
						autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
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
						returnKeyType={'next'}
						autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
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
						returnKeyType={'next'}
						autoFocus={true}
						autoCapitalize="none"
						autoCorrect={false}
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
					{/*<Text style={styles.inputStyle}> {result} </Text>*/}
					{result
						? <Text style={{fontSize: 15, marginLeft: 40, color: 'gray'}}> Tiền lãi </Text>
						: <Text style={{fontSize: 15, marginLeft: 40,}}>
								{parseFloat(money) * ((parseFloat(term) / 12) * (parseFloat(interest) / 100))}
							</Text>
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

export default CompoundInterest;
