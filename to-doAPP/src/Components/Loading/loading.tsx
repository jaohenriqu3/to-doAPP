import { ActivityIndicator, View } from 'react-native'
import { Theme } from '../../DesignSystem/theme'
import { LoadingStyle } from './loading-style'

export function Loading() {
	return (
		<View style={LoadingStyle.container}>
			<ActivityIndicator size={50} color={Theme.colors.brand.blue} />
		</View>
	)
}