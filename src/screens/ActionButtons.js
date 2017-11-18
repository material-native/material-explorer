'use strict';
import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Alert, ScrollView} from 'react-native';
import {Header} from 'react-navigation';
import {shades, withMaterialStyles, ActionButton, Icon} from '../material-native';

const Bar = withMaterialStyles((materialTheme) => ({
	exampleBar: {
		marginTop: 16,
		paddingTop: 0,
		height: Platform.OS === 'ios' ? 44 : 56,
		backgroundColor: materialTheme.appBar.background,
	},
}))(class Bar extends PureComponent {
	render() {
		const {materialStyles, title, headerLeft, headerRight} = this.props;

		return (
			<Header
				scene={{
					index: 0,
				}}
				getScreenDetails={() => ({
					options: {
						headerTintColor: shades.light.primaryText,
						headerStyle: materialStyles.exampleBar,
						title,
						hasLeftComponent: !!headerLeft,
						hasRightComponent: !!headerRight,
						headerLeft,
						headerRight,
					},
				})}
				navigation={{
					state: {
						index: 0,
						routes: [{

						}],
					},
				}} />
		);
	}
});

class ActionButtons extends PureComponent {
	static navigationOptions = {
		title: 'Action Buttons',
		headerRight: (
			<ActionButton.List>
				<ActionButton
					icon={<Icon name='info' />}
					onPress={() => {
						Alert.alert('You pressed an icon!');
					}} />
				<ActionButton
					text='Press me'
					onPress={() => {
						Alert.alert('You pressed me!');
					}} />
			</ActionButton.List>
		),
	};

	render() {
		const {materialStyles} = this.props;

		return (
			<ScrollView style={materialStyles.root} contentContainerStyle={styles.container}>
				<Bar
					title='Normal'
					headerLeft={
						<ActionButton.List>
							<ActionButton icon={<Icon name='arrow-back' />} />
						</ActionButton.List>
					}
					headerRight={
						<ActionButton.List>
							<ActionButton icon={<Icon name='info' />} />
							<ActionButton text='Press me' />
						</ActionButton.List>
					} />

				<Bar
					title='Borderless'
					headerLeft={
						<ActionButton.List>
							<ActionButton borderless icon={<Icon name='arrow-back' />} />
						</ActionButton.List>
					}
					headerRight={
						<ActionButton.List>
							<ActionButton borderless icon={<Icon name='info' />} />
							<ActionButton borderless text='Press me' />
						</ActionButton.List>
					} />

				<Bar
					title='Accent'
					headerLeft={
						<ActionButton.List>
							<ActionButton accent icon={<Icon name='arrow-back' />} />
						</ActionButton.List>
					}
					headerRight={
						<ActionButton.List>
							<ActionButton accent icon={<Icon name='info' />} />
							<ActionButton accent text='Press me' />
						</ActionButton.List>
					} />

				<Bar
					title='Disabled'
					headerLeft={
						<ActionButton.List>
							<ActionButton disabled icon={<Icon name='arrow-back' />} />
						</ActionButton.List>
					}
					headerRight={
						<ActionButton.List>
							<ActionButton disabled icon={<Icon name='info' />} />
							<ActionButton disabled text='Press me' />
						</ActionButton.List>
					} />

				<Bar
					headerLeft={
						<ActionButton.List>
							<ActionButton icon={<Icon name='close' />} />
						</ActionButton.List>
					}
					headerRight={
						<ActionButton.List>
							<ActionButton icon={<Icon name='info' />} />
							<ActionButton narrow icon={<Icon name='more-vert' />} />
						</ActionButton.List>
					} />
			</ScrollView>
		);
	}
}

export default withMaterialStyles((materialTheme) => ({
	root: {
		flex: 1,
		backgroundColor: materialTheme.palette.container,
	},
	exampleBar: {
		paddingTop: 0,
		height: Platform.OS === 'ios' ? 44 : 56,
		backgroundColor: materialTheme.appBar.background,
	},
}))(ActionButtons);

const styles = StyleSheet.create({
	container: {
		padding: 16,
		paddingTop: 0,
	},
});
