import React, {Component} from 'react';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, NativeBaseProvider} from 'native-base';
export const Lab9_3 = () => {
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Header</Title>
				</Body>
				<Right />
			</Header>
			<Content>
				<Text>This is Content Section</Text>
			</Content>
			<Footer>
				<FooterTab>
					<Button full>
						<Text>Footer</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
};
