import type { Meta, StoryObj } from '@storybook/react';

import {Task} from "../Task";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta <typeof Task> = {
  title: 'Example/Task',
  component: Task,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    changeTaskStatus: {
      description: "change Task Status",
      action: "clicked"
    },
      changeTaskTitle: {
          description: "change Task Title",
          action: "clicked"
      },
      removeTask:{
          description: "remove Task",
          action: "clicked"
      }

  },
    args:{
      task: {id: "12312355tgh1", title:"JS", isDone: true},
      todolistId: "123eg231243" // Общие данные для всех историй
    }
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TaskIsDoneStory: Story = {}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TaskIsNotDoneStory: Story = {
    args:{
        task: {id: "12bn31235123g5tgh1", title:"HTML", isDone: false},
    }

}