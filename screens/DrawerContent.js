import React from 'react'
import {View, StyleSheet} from 'react-native'
	
import {
	Activator,Title,Caption,Paragraph, Drawer, Text, TouchableRipple, Switch, Avatar
} from 'react-native-paper'

import {
	DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';

const DrawerContent = (props) => {
	const [isDarkTheme, setDarkTheme] = React.useState(false)

    const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
    	setDarkTheme(!isDarkTheme)
    }

	return (
		<View style={{flex:1}}> 
			<DrawerContentScrollView {...props}>
				<View style = {styles.drawerContent}>
					<View style = {styles.userInfoSection}>
						<View style = {{flexDirection: 'row', marginTop: 15}}>
							<Avatar.Image 
								source = {{
									uri: "https://media-exp1.licdn.com/dms/image/C5103AQHa8roP9xEjnw/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=ox_tnz8hCJv6gXR7uPvjOPXDQJitjJpKKQyKRlY8ONY"
								}}
								size = {50}
							/>
 
							<View style = {{marginLeft: 15, flexDirection: 'column'}}>
								<Text style = {styles.title}>
									SHIVAKUMARA M
								</Text>
								<Caption style = {styles.caption}>
									Hiremath
								</Caption>
							</View>
						</View>

						<View style = {styles.row}>
							<View style = {styles.section}>
								<Paragraph style = {{...styles.paragraph, ...styles.caption}}>80</Paragraph>
								<Caption>Bookings</Caption>
							</View>
						</View>
					</View>
					<Drawer.Section sytle = {styles.drawerSection}>
		                <DrawerItem 
		                    icon={({color, size}) => (
		                        <Icon 
		                        name="home-outline" 
		                        color={color}
		                        size={size}
		                        />
		                    )}
		                    label="Home"
		                    onPress={() => {props.navigation.navigate('Home')}}
		                />

		                <DrawerItem 
		                    icon={({color, size}) => (
		                        <Icon 
		                        name="account-outline" 
		                        color={color}
		                        size={size}
		                        />
		                    )}
		                    label="Profile"
		                    onPress={() => {props.navigation.navigate('AccountScreen')}}
		                />

		                <DrawerItem 
		                    icon={({color, size}) => (
		                        <Icon 
		                        name="settings-outline" 
		                        color={color}
		                        size={size}
		                        />
		                    )}
		                    label="Settings"
		                    onPress={() => {props.navigation.navigate('SettingsScreen')}}
		                />

		                <DrawerItem 
		                    icon={({color, size}) => (
		                        <Icon 
		                        name="bookmark-outline" 
		                        color={color}
		                        size={size}
		                        />
		                    )}
		                    label="Bookmarks"
		                    onPress={() => {}}
		                />

		                <DrawerItem 
		                    icon={({color, size}) => (
		                        <Icon 
		                        name="account-check-outline" 
		                        color={color}
		                        size={size}
		                        />
		                    )}
		                    label="Support"
		                    onPress={() => {}}
		                />
		            </Drawer.Section>

		            <Drawer.Section title = "Preferences">
		            	<TouchableRipple onPress = {() => {toggleTheme()}}>
		            		<View style = {styles.preference}>
		            			<Text>
		            				Dark Theme
		            			</Text>
		            			<View pointerEvents = "none">
		            				<Switch value = {isDarkTheme}/>
		            			</View>
		            		</View>
		            	</TouchableRipple>
		            </Drawer.Section>
				</View>
			</DrawerContentScrollView>

			<Drawer.Section style = {styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
		</View>
	)
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold'
	},
	caption: {
		fontSize: 14,
		lineHeight: 14
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3
	},
	drawerSection: {
		marginTop: 15
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16
	}
})

export default DrawerContent;