import { StyleSheet } from 'react-native'
import { Theme } from '../../DesignSystem/theme'

export const StyleTask = StyleSheet.create({
	taskContainer: {
		width: '100%',
		height: 64,
		backgroundColor: Theme.colors.base.gray500,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 4,
		paddingHorizontal: 12,
		paddingVertical: 20,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: Theme.colors.base.gray400,
	},
	textContainer: {
		width: '80%',
		height: 40,
		alignContent: 'center',
		justifyContent: 'center',
		marginHorizontal: 8,
	},
	textDone: {
		fontSize: Theme.font_size.md,
		color: Theme.colors.base.gray300,
		textDecorationLine: 'line-through',
	},
	textCreated: {
		fontSize: Theme.font_size.md,
		color: Theme.colors.base.gray100,
		textDecorationLine: 'none',
	},
})