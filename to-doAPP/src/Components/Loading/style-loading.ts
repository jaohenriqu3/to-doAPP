import { StyleSheet } from 'react-native'
import { Theme } from '../../DesignSystem/theme'

export const LoadingStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Theme.colors.base.gray600,
	},
})