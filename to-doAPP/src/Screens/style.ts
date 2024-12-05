import { StyleSheet } from 'react-native'
import { Theme } from '../DesignSystem/theme'

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.colors.base.gray600,
	},
    title: {
        color: Theme.colors.base.gray100,
        fontFamily: Theme.font_family.bold,
        fontSize: Theme.font_size.lg, 
    },
	tasksContainer: {
		flex: 1,
		marginTop: 55,
		marginHorizontal: 24,
	},
	tasksCreated: {
		color: Theme.colors.brand.blue,
		fontSize: Theme.font_size.md,
		fontFamily: Theme.font_family.bold,
	},
	tasksDone: {
		color: Theme.colors.brand.purple,
		fontSize: Theme.font_size.md,
		fontFamily: Theme.font_family.bold,
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	counterContainer: {
		backgroundColor: Theme.colors.base.gray400,
		width: 25,
		height: 19,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
	},
	counterText: {
		color: Theme.colors.base.gray200,
		fontSize: Theme.font_size.sm,
		fontFamily: Theme.font_family.bold,
	},
})