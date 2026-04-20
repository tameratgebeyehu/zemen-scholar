import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TaskItem } from './TaskItem';
import { Card } from './Card';
import { theme } from '../theme/theme';

const tasks = [
  { id: 1, title: 'Practice IELTS questions', subtext: 'Focus on Listening section', completed: false },
  { id: 2, title: 'Upload transcript', subtext: 'Academic records for Semester 1-6', completed: true },
  { id: 3, title: 'Check visa requirements', subtext: 'F1 Student Visa Checklist', completed: false },
];

export const TaskList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <Card>
        {tasks.map((task, index) => (
          <View key={task.id}>
            <TaskItem 
              title={task.title} 
              subtext={task.subtext} 
              completed={task.completed} 
            />
            {index < tasks.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.xs,
  },
});
