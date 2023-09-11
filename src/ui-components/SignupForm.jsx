/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function SignupForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="476px"
      height="72px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SignupForm")}
      {...rest}
    >
      <Flex
        width="476px"
        height="72px"
        {...getOverrideProps(overrides, "Input/Text Style 1")}
      ></Flex>
      <Flex
        width="180px"
        height="56px"
        {...getOverrideProps(overrides, "Button/Primary/With Icon")}
      ></Flex>
    </View>
  );
}
