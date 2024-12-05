import { ActivityIndicator, View } from 'react-native'
import { Theme } from '../../DesignSystem/theme'
import { StyleLoading } from './style-loading'

export function Loading() {
	return (
		<View style={StyleLoading.container}>
			<ActivityIndicator size={50} color={Theme.colors.brand.blue} />
		</View>
	)
}