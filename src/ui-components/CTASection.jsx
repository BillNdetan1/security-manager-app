/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function CTASection(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "CTASection")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 436")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="1120px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Updates"
            {...getOverrideProps(overrides, "Updates")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="1120px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Stay up to date on current discounts and feature updates."
            {...getOverrideProps(
              overrides,
              "Stay up to date on current discounts and feature updates."
            )}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Form")}
        >
          <TextField
            width="300px"
            height="unset"
            placeholder="Email address"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
          <Button
            width="unset"
            height="unset"
            border="1px SOLID rgba(0,0,0,1)"
            shrink="0"
            backgroundColor="rgba(191,64,64,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Sign me up"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
