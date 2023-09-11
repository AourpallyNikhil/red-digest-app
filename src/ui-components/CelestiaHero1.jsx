/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function CelestiaHero1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1600px"
      height="900px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CelestiaHero1")}
      {...rest}
    >
      <View
        width="1600px"
        height="954px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "BG")}
      ></View>
      <View
        width="1600px"
        height="64px"
        {...getOverrideProps(overrides, "Header")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="1599.53px"
        height="836px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="64px"
        left="0px"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <Image
          width="1599.53px"
          height="836px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Artboard 1@4x 1")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="642.4px"
        height="242.73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="362.27px"
        left="111px"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="642.4px"
          height="119.73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Content Left")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="642.4px"
            height="119.73px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Group 1")}
          >
            <Text
              fontFamily="Gilda Display"
              fontSize="58px"
              fontWeight="400"
              color="rgba(24,24,27,1)"
              lineHeight="70px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="498.78px"
              height="75.9px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Find your Center"
              {...getOverrideProps(overrides, "Find your Center")}
            ></Text>
            <Text
              fontFamily="Gilda Display"
              fontSize="20px"
              fontWeight="400"
              color="rgba(82,82,91,1)"
              lineHeight="30px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="637px"
              height="33px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="86.73px"
              left="5.4px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Gems that ground you, bringing a sense of balance amidst the chaos."
              {...getOverrideProps(
                overrides,
                "Gems that ground you, bringing a sense of balance amidst the chaos."
              )}
            ></Text>
          </View>
        </View>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="170.73px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Form")}
        >
          <Flex
            width="476px"
            height="72px"
            {...getOverrideProps(overrides, "Email")}
          ></Flex>
          <Flex
            width="179px"
            height="56px"
            {...getOverrideProps(overrides, "sign up")}
          ></Flex>
        </Flex>
      </View>
    </View>
  );
}
