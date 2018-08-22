import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export const Route = () => null;

const buildSceneConfig = () => {
  const config = {};

  children.forEach(child => {
    config[child.props.name] = {
      key: child.props.name,
      component: child.props.component
    };
  });
  return config;
};

export class Navigator extends Component {
  constructor(props) {
    super(props);

    const sceneConfig = buildSceneConfig(props.children);
    const initialSceneName = props.children[0].props.name;

    this.state = {
      sceneConfig,
      stack: [sceneConfig[initialSceneName]]
    };
  }

  handlePush = sceneName => {
    this.setState(state => ({
      ...state,
      stack: [...state.stack, state.sceneConfig[sceneName]]
    }));
  };

  render() {
    const CurrentScene = this.state.stack[0].component;
    return (
      <View style={StyleSheet.container}>
        {this.state.stack.map((scene, index) => {
          const CurrentScene = scene.component;

          return (
            <CurrentScene
              key={scene.key}
              navigator={{ push: this.handlePush }}
            />
          );
        })}
      </View>
    );
  }
}
