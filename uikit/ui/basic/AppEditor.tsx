"use client";
import React from "react";
import { useState, FC } from "react";
import RichTextEditor from "reactjs-tiptap-editor";

import {
  BaseKit,
  Bold,
  Italic,
  Strike,
  Underline,
  TextAlign,
  BulletList,
  OrderedList,
  Heading,
  Color,
  Highlight,
  Image,
  History,
  FontSize,
  TextDirection,
  Link,
  Table,
  HorizontalRule,
  Blockquote,
} from "reactjs-tiptap-editor/extension-bundle";
import "reactjs-tiptap-editor/style.css";

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {
      showOnlyCurrent: true,
    },
  }),
  Bold,
  Italic,
  Strike,
  Underline,
  BulletList,
  OrderedList,
  Heading,
  Color,
  Highlight,
  FontSize,
  TextDirection,
  TextAlign,
  History,
  Image,
  Link,
  Table,
  HorizontalRule,
  Blockquote,
];

const DEFAULT = "";

interface AppEditorProps {
  onChangeValue: (value: string) => void;
  defaultValue?: string;
}

const AppEditor: FC<AppEditorProps> = ({
  onChangeValue,
  defaultValue = DEFAULT,
}) => {
  const [content, setContent] = useState(defaultValue);

  const onChangeContent = (value: string) => {
    setContent(value);
    onChangeValue(value);
  };
  return (
    <div>
      <RichTextEditor
        output="html"
        dark={false}
        content={content}
        onChangeContent={onChangeContent}
        extensions={extensions}
      />
    </div>
  );
};

export default AppEditor;
