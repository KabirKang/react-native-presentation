// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./index.css");
require("codemirror/mode/jsx/jsx");
require("spectacle/lib/themes/default/dark.codemirror.css");

import { FolderStructure, Folder, File } from './folders';

import NativeExample from './native-example';
import { IPhone, Android } from './phones';

const images = {
    threeThreads: require("../assets/three-threads.png"),
    jsNativeBridge: require("../assets/js-native-bridge.png"),
    verbling: require("../assets/verbling.png"),
  city: require("../assets/city.jpg"),
  buttons: require("../assets/buttons.png"),
  reactNativeElements: require("../assets/react-native-elements.png"),
  reactNativeMaterial1: require("../assets/reactNativeMaterial1.gif"),
  reactNativeMaterial2: require("../assets/reactNativeMaterial2.gif"),
  reactNativeMaterial3: require("../assets/reactNativeMaterial3.gif"),
  androidCheckin: require('../assets/android-checkin.png'),
  androidMenu: require('../assets/android-menu.png'),

  androidSampleApp: require('../assets/android-sample-app.png'),
  iosSampleApp: require('../assets/ios-sample-app.png'),
  debugging: require('../assets/debugging.gif'),
  hotReload: require('../assets/hot-reload.gif'),
  inspectorCloseup: require('../assets/inspector-closeup.png'),
  networkInspector: require('../assets/network-inspector.png'),
  stackTrace: require('../assets/stack-trace.png'),
  howItWorks: require('../assets/how-it-works.png'),
  jestExample: require('../assets/jest-example.png'),
  jackie: require('../assets/jackie.jpg'),
  navigationAndroid: require('../assets/navigation-android.gif'),
  navigationIos: require('../assets/navigation-ios.gif'),

  reduxStateTree1: require('../assets/redux-state-tree-1.png'),
  reduxStateTree2: require('../assets/redux-state-tree-2.png'),
  reduxTimeTravel: require('../assets/redux-time-travel.gif'),
};

const logos = {
  airbnb: require('../assets/users/airbnb.png'),
  facebook: require('../assets/users/facebook.png'),
  gyroscope: require('../assets/users/gyroscope.png'),
  instagram: require('../assets/users/instagram.jpg'),
  robin: require('../assets/users/robin.png'),
  vogue: require('../assets/users/vogue.jpg'),
};

preloader(logos);
preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#505050",
  tertiary: "#ff7e27",
  quartenary: "#808080"
}, {
  primary: "Avenir",
  secondary: "Avenir"
});

// Useful links:
// http://www.reactnativeexpress.com/
// https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/
//  "learn once, write anywhere"
//   Different platforms have different looks, feels, and capabilities, and as such, we should still be developing discrete apps for each platform
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            React-Native
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={2} textColor='tertiary'>react-native?</Heading>
          <List>
            <Appear><ListItem>Great dev experience of React on mobile</ListItem></Appear>
            <Appear><ListItem>80%+ codeshare between mobile platforms</ListItem></Appear>
            <Appear><ListItem>Competitive performance; not a hybrid app.</ListItem></Appear>
            <Appear><ListItem>In active development; large dev community</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={2} textColor='tertiary'>In production?!</Heading>
          <List>
            <Appear><ListItem>Verbling - language tutoring app</ListItem></Appear>
            <Appear><ListItem>Launched on both platforms in 3 months</ListItem></Appear>
            <Appear><ListItem>Quickly iterated like on web</ListItem></Appear>
            <Appear><ListItem>Minor issues, but not with performance</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
            <Image width="75%" src={images.verbling}/>
        </Slide>

      <Slide transition={["slide"]}>
          <Text textColor="tertiary">
              Who's using it?
          </Text>

          <Layout>
              <Fill>
                  <Image
                      className='show-case__logo'
                      src={logos.airbnb}
                  />
                  <Text textColor='grey'>Airbnb</Text>
              </Fill>

              <Fill>
                  <Image
                      className='show-case__logo'
                      src={logos.facebook}
                  />
                  <Text textColor='grey'>Facebook</Text>
              </Fill>

              <Fill>
                  <Image
                      className='show-case__logo'
                      src={logos.gyroscope}
                  />
                  <Text textColor='grey'>Gyroscope</Text>
              </Fill>
          </Layout>

          <div className='show-case__separator' />

          <Layout>
              <Fill>
                  <Image
                      className='show-case__logo'
                      src={logos.instagram}
                  />
                  <Text textColor='grey'>Instagram</Text>
              </Fill>

              <Fill>
                  <Image
                      className='show-case__logo'
                      src={logos.robin}
                  />
                  <Text textColor='grey'>Round Robin</Text>
              </Fill>

              <Fill>
                  <Image
                      className='show-case__logo'
                      src={logos.vogue}
                  />
                  <Text textColor='grey'>Vogue</Text>
              </Fill>
          </Layout>
      </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={5} textColor='tertiary'>Sounds like a bunch of baloney...</Heading>
            <Appear><Image width="100%" src={images.jsNativeBridge}/></Appear>
        </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
              <Image width="100%" src={images.threeThreads}/>
          </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={5}>React-Native?</Heading>
          <List>
            <Appear><ListItem>Default React Components - View, Text, Image, etc</ListItem></Appear>
            <Appear><ListItem>Style Sheet support, including flexbox</ListItem></Appear>
            <Appear><ListItem>Animations</ListItem></Appear>
            <Appear><ListItem>Navigators</ListItem></Appear>
            <Appear><ListItem>fetch API, XMLHttpRequest, WebSockets</ListItem></Appear>
              <Appear><ListItem>(async / await syntax!)</ListItem></Appear>
          </List>
        </Slide>

          <Slide transition={["slide"]}>
              <Heading textColor="tertiary">
                  Networking
              </Heading>
              <List>
                  <Appear>
                      <ListItem>New Fetch API Supported</ListItem></Appear>
                  <Appear><ListItem>Raw XHR implemented if required</ListItem></Appear>
                  <Appear><ListItem>WebSockets Supported</ListItem></Appear>
              </List>
          </Slide>

          <Slide transition={["slide"]}>
              <Heading textColor="tertiary">
                  Fetch API
              </Heading>

              <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/fetch.example")}
                  margin="20px auto"
              />
          </Slide>

          <Slide transition={["slide"]}>
              <Heading size={3} textColor="tertiary">
                  Fetch API - async / await
              </Heading>

              <CodePane
                  lang="jsx"
                  source={require("raw-loader!../assets/async.example")}
                  margin="20px auto"
              />
          </Slide>

        <Slide>
          <Heading size={5}>Useful Components</Heading>
          <NativeExample code={`
import React from 'react';
import { AppRegistry, View, Text, Image, Button } from 'react-native';

// View, similar to div
// Text, similar to span
class HelloWorldApp extends React.Component {
  render() {
    const picture = {
      uri: 'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'
    };

    return (
      <View>
        <Text>
          Hello world!
        </Text>
        <Button
          title="Button!"
          accessibilityLabel="Learn more about this button"
        />
        <Image
          source={picture}
          style={{width: 193, height: 110}}
        />
      </View>
    );
  }
}

// Register your App, rather than mounting like before
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
          `}/>
        </Slide>

        <Slide>
          <Image width="75%" src={images.buttons}/>
        </Slide>

        <Slide>
          <Heading size={5}>Styling</Heading>
          <NativeExample code={`
import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native';

// Style sheets
const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  }
});

class HelloWorldApp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>
          Heading
        </Text>
        <Text style={styles.red}>
          Red text
        </Text>
        <Text style={styles.blue}>
          Blue text
        </Text>
        <Text style={[styles.heading, styles.red]}>
          Blue Heading
        </Text>
      </View>
    );
  }
}

// Register your App, rather than mounting like before
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
          `}/>
        </Slide>

        <Slide>
          <Heading size={5}>Flex Box</Heading>
          <NativeExample code={`
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting 'justifyContent' to 'center'.
      // Try setting 'flexDirection' to 'row'.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);
          `}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Getting Started
          </Text>

          <CodePane
            lang="jsx"
            source={`
> npm install -g create-react-native-app
> create-react-native-app AwesomeProject
> cd AwesomeProject
> npm start
> npm run eject
`.trim()}
            margin="20px auto"
          />

          <Appear>
            <Link
              textColor="black"
              href="https://facebook.github.io/react-native/docs/getting-started.html"
            >
              https://facebook.github.io/react-native/docs/getting-started.html
            </Link>
          </Appear>
        </Slide>



        <Slide transition={["slide"]}>
          <FolderStructure>
            <Folder name='AwesomeProject' textColor='tertiary'>
              <Folder name='android'>
                <Folder name='app' textColor='grey'/>
                <Folder name='gradle' textColor='grey'/>
              </Folder>

              <Folder name='ios'>
                <Folder name='AwesomeProject.xcodeproj' textColor='grey'/>
                <Folder name='AwesomeProjectTests' textColor='grey'/>
              </Folder>

              <File textColor='grey'>
                index.js
              </File>
              <File textColor='grey'>
                package.json
              </File>
            </Folder>
          </FolderStructure>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3} textColor="black">
            Running
          </Heading>

          <CodePane
            lang="jsx"
            source={`
> npm run ios
> npm run android
`.trim()}
            margin="20px auto"
          />

          <Layout>
            <Fill>
              <Image width="50%" src={images.androidSampleApp}/>
            </Fill>
            <Fill>
              <Image width="50%" src={images.iosSampleApp}/>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Inbuilt Tooling
          </Text>
          <Image width="35%" src={images.androidMenu}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Debug JS Remotely
          </Text>
          <Image src={images.debugging}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Enable Hot Reloading
          </Text>
          <Image src={images.hotReload}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Element Inspector
          </Text>

          <Image src={images.inspectorCloseup}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Network Inspector
          </Text>

          <Image src={images.networkInspector}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Stack Trace
          </Text>

          <Image width='35%' src={images.stackTrace}/>
        </Slide>


        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Feature Testing
          </Text>

          <List>
            <Appear>
              <ListItem>
                <Link href="http://appium.io/" textColor='black'>
                  Appium
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="http://calaba.sh/" textColor='black'>
                  Calabash
                </Link>
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Text>
              Remember: It's a real android/ios app!
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            JavaScript Testing - Jest
          </Text>
          <List>
            <Appear><ListItem>React SnapShot Testing</ListItem></Appear>
            <Appear><ListItem>Built-in Code Coverage</ListItem></Appear>
            <Appear><ListItem>Parallel test runner</ListItem></Appear>
            <Appear><ListItem>Mocking functions, imports, network calls</ListItem></Appear>
            <Appear><ListItem>Jasmine API</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Image width="75%" src={images.jestExample}/>
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Other cool things
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Native Interopability
          </Text>

          <List>
            <Appear><ListItem>Hardware</ListItem></Appear>
            <Appear><ListItem>Performance</ListItem></Appear>
            <Appear><ListItem>Wrap an existing Java/iOS API</ListItem></Appear>
            <Appear><ListItem>Hybrid Native/React-Native Apps</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Example: Payment Module
          </Text>
          <CodePane
            lang="java"
            source={require("raw-loader!../assets/java-interop-1.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Example: React Method
          </Text>
          <CodePane
            lang="java"
            source={require("raw-loader!../assets/java-interop-2.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Example: Usage
          </Text>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/java-interop-3.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>JavaScript</TableHeaderItem>
                  <TableHeaderItem>Native</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableItem>Bool</TableItem><TableItem>Boolean</TableItem></TableRow>
                <TableRow><TableItem>Number</TableItem><TableItem>Integer</TableItem></TableRow>
                <TableRow><TableItem>Number</TableItem><TableItem>Double</TableItem></TableRow>
                <TableRow><TableItem>Number</TableItem><TableItem>Float</TableItem></TableRow>
                <TableRow><TableItem>String</TableItem><TableItem>String</TableItem></TableRow>
                <TableRow><TableItem>function</TableItem><TableItem>Callback</TableItem></TableRow>
                <TableRow><TableItem>Object</TableItem><TableItem>ReadableMap</TableItem></TableRow>
                <TableRow><TableItem>Array</TableItem><TableItem>ReadableArray</TableItem></TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Custom iOS/Android Views
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Platform-Specific Components
          </Text>

          <CodePane
            lang="jsx"
            source={`
> CustomComponent.ios.js
> CustomComponent.android.js
`.trim()}
            margin="20px auto"
          />

        <CodePane
            lang="jsx"
            source={`
// Note - No extension specified
import CustomComponent from './CustomComponent';
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            Platform-Specific Styles
          </Text>

        <CodePane
            lang="jsx"
            source={`
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  paddingTop: (Platform.OS === 'ios') ? 30 : 0,
});
`.trim()}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["slide"]} notes={`
            - Hierarchy
            - Temporal Navigation
            - Horizontal Paging
          `}>
          <Text textColor='tertiary'>
            Navigators
          </Text>

          <Appear>
            <Text textColor='quartenary'>
              The one thing I disliked
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor='tertiary'>
            What's available?
          </Text>

          <List>
            <Appear><ListItem>Facebook - NavigatorIOS</ListItem></Appear>
            <Appear><ListItem>Facebook - Navigator</ListItem></Appear>
            <Appear><ListItem>Facebook - NavigationExperimental</ListItem></Appear>
            <Appear><ListItem>wix - react-native-navigation</ListItem></Appear>
            <Appear><ListItem>aksonov - react-native-router-flux</ListItem></Appear>
            <Appear><ListItem>ReactTraining - react-router (4.0 beta)</ListItem></Appear>
            <Appear><ListItem>exponent - ex-navigator</ListItem></Appear>
            <Appear><ListItem>airbnb - Not open sourced</ListItem></Appear>
            <Appear><ListItem>....</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.jackie}/>
        </Slide>

        <Slide transition={["slide"]}>
          <Link href="https://www.react-navigation.org" textColor='tertiary'>
            react-navigation.org
          </Link>
          <Appear>
            <Text textColor="quartenary">
              ... This time we'll get it right!
            </Text>
          </Appear>

          <Layout>
            <Fill>
              <Android src={images.navigationAndroid} />
            </Fill>

            <Fill>
              <IPhone src={images.navigationIos} />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <Heading textColor="white">
            Redux
          </Heading>

          <Appear>
            <Text textColor="tertiary">
              ... Other state containers available.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            A Single point of read-only truth
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Image width="75%" src={images.reduxStateTree1} />
        </Slide>

        <Slide transition={["slide"]}>
          <Image width="75%" src={images.reduxStateTree2} />
        </Slide>

        <Slide transition={["slide"]}>
          <Text textColor="tertiary">
            Time Travel!
          </Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Image width="75%" src={images.reduxTimeTravel} />
        </Slide>

        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
};