import React from 'react';
import { Text, View } from 'react-native';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedbackType } from '../Widget'

import { feedbackTypes } from '../../utils/feedbackTypes';



interface Props {
  onFeedbackTypeChanged: (FeedbackType: FeedbackType) => void;
}

import { styles } from './styles';

export function Options( { onFeedbackTypeChanged }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>
      <View style={styles.options}>
        {
          Object
          .entries(feedbackTypes)
          .map(([key, value]) => (
            <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))

        }
      </View>
      <Copyright />
    </View>
  );
}