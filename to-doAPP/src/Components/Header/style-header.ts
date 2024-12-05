import { StyleSheet } from 'react-native'
import { Theme } from '../../DesignSystem/theme'

export const StyleHeader = StyleSheet.create({
	headerContainer: {
		backgroundColor: Theme.colors.base.gray700,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 173,
		position: 'relative',
	},
	form: {
		position: 'absolute',
		bottom: -54 / 2,
		height: 54,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 54,
		width: '75%',
		backgroundColor: Theme.colors.base.gray500,
		borderRadius: 5,
		padding: 16,
		color: Theme.colors.base.gray100,
		marginRight: 4,
		fontSize: Theme.font_size.md,
		fontFamily: Theme.font_family.regular,
		borderColor: Theme.colors.base.gray700,
		borderWidth: 1,
	},
	inputBorder: {
		borderColor: Theme.colors.brand.purple,
	},
	button: {
		height: 54,
		width: 54,
		borderRadius: 5,
		backgroundColor: Theme.colors.brand.blue_dark,
		alignItems: 'center',
		justifyContent: 'center',
	},
})