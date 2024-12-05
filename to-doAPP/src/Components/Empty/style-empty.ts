import { StyleSheet } from 'react-native'
import { Theme } from '../../DesignSystem/theme'

export const StyleEmpty = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		paddingVertical: 48,
		paddingHorizontal: 20,
		borderTopColor: Theme.colors.base.gray400,
		borderEndColor: Theme.colors.base.gray600,
		borderStartColor: Theme.colors.base.gray600,
		borderBottomColor: Theme.colors.base.gray600,
		borderWidth: 1,
	},
	image: {
		marginBottom: 16,
	},
	textBold: {
		fontSize: 14,
		fontFamily: Theme.font_family.bold,
		color: Theme.colors.base.gray300,
	},
	textRegular: {
		fontFamily: Theme.font_family.regular,
	},
})