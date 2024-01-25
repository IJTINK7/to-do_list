import type { Meta, StoryObj } from '@storybook/react';
import {action} from "@storybook/addon-actions"

import {AddItemForm, AddItemFormPropsType} from "../AddItemForm";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta <typeof AddItemForm> = {
  title: 'Example/AddItemForm',
  component: AddItemForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    addItem: {
      description: "Button clicked inside form",
      action: "clicked"
    }
  },
} satisfies Meta<typeof AddItemForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddItemFormStory: Story = {}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const AddItemFormError = (props: AddItemFormPropsType)=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>("Title is required")

    const addItem = () => {
      if (title.trim() !== "") {
        props.addItem(title);
        setTitle("");
      } else {
        setError("Title is required");
      }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (error !== null) {
        setError(null);
      }
      if (e.charCode === 13) {
        addItem();
      }
    }

    return <div>
      <TextField variant="outlined"
                 error={!!error}
                 value={title}
                 onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}
                 label="Title"
                 helperText={error}
      />
      <IconButton color="primary" onClick={addItem}>
        <AddBox />
      </IconButton>
    </div>
};

export const AddItemFormErrorStory: Story ={
  render:()=> <AddItemFormError addItem={action("Button clicked inside form")}/>
}