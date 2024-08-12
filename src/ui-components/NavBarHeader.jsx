/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuthSignOutAction } from "./utils";
import { Button, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  const buttonThreeEightNineNineOneOneOneEightOnClick = useAuthSignOutAction({
    global: false,
  });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <View
        width="91px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 4382")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="85px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="6px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="SMBS"
          {...getOverrideProps(overrides, "SMBS")}
        ></Text>
        <Icon
          width="4px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 4, height: 8 }}
          paths={[
            {
              d: "M0.887485 6.47619L0.639133 6.04223L0.610441 6.05865L0.58416 6.07871L0.887485 6.47619ZM0.407428 -0.139805C0.231643 0.463798 0.191849 0.986246 0.405288 1.40373C0.628661 1.84063 1.04928 2.01 1.38482 2.10268C1.55783 2.15046 1.74448 2.18698 1.9157 2.22084C2.09344 2.25599 2.26312 2.28982 2.43214 2.33446C2.76753 2.42305 3.06736 2.54644 3.32043 2.76368L3.97179 2.00492C3.55921 1.65073 3.09817 1.47609 2.68751 1.36762C2.48349 1.31373 2.28384 1.27428 2.1097 1.23984C1.92905 1.20411 1.78127 1.17473 1.65105 1.13877C1.38014 1.06394 1.31912 0.994373 1.29567 0.948511C1.26229 0.88322 1.2105 0.679059 1.36754 0.139805L0.407428 -0.139805ZM3.32043 2.76368C3.42168 2.8506 3.46479 2.92918 3.48411 2.99596C3.50431 3.06579 3.50822 3.15713 3.47821 3.28007C3.41445 3.5412 3.21534 3.87244 2.88968 4.24307C2.24658 4.97496 1.27242 5.6798 0.639133 6.04223L1.13584 6.91015C1.83387 6.51067 2.90468 5.741 3.64089 4.90314C4.00488 4.48888 4.32902 4.01144 4.44967 3.51725C4.51186 3.26252 4.52327 2.98955 4.44471 2.71803C4.36528 2.44349 4.20338 2.20372 3.97179 2.00492L3.32043 2.76368ZM0.887485 6.47619C0.58416 6.07871 0.584058 6.07878 0.583949 6.07887C0.583903 6.0789 0.583786 6.07899 0.583692 6.07906C0.583506 6.07921 0.583288 6.07937 0.583041 6.07956C0.582545 6.07994 0.581929 6.08041 0.581193 6.08098C0.579722 6.08211 0.577776 6.08361 0.575378 6.08547C0.570583 6.08919 0.563973 6.09435 0.555736 6.10085C0.539275 6.11385 0.516235 6.13228 0.488125 6.15538C0.432093 6.20142 0.354927 6.26686 0.269004 6.34554C0.103735 6.49688 -0.120182 6.72084 -0.279551 6.96407C-0.358827 7.08506 -0.440819 7.23857 -0.478516 7.41117C-0.518119 7.59249 -0.51294 7.82258 -0.373156 8.03593C-0.239536 8.23986 -0.0327237 8.35141 0.168197 8.41274C0.370053 8.47436 0.611686 8.5 0.887479 8.5L0.887479 7.5C0.664066 7.5 0.531294 7.47802 0.460145 7.45631C0.388063 7.4343 0.423273 7.4268 0.463292 7.48788C0.509476 7.55837 0.499055 7.62179 0.498453 7.62455C0.498416 7.62472 0.499007 7.622 0.501045 7.61622C0.503075 7.61047 0.506265 7.60246 0.51109 7.59215C0.520941 7.5711 0.535779 7.54435 0.556894 7.51212C0.647129 7.3744 0.797619 7.21741 0.944356 7.08303C1.01444 7.01886 1.07767 6.96524 1.12304 6.92796C1.14563 6.90939 1.16354 6.89508 1.17536 6.88575C1.18126 6.8811 1.18562 6.8777 1.18826 6.87565C1.18958 6.87463 1.19046 6.87394 1.1909 6.87361C1.19111 6.87344 1.19122 6.87336 1.1912 6.87337C1.1912 6.87338 1.19116 6.87341 1.1911 6.87346C1.19106 6.87348 1.19099 6.87354 1.19098 6.87355C1.1909 6.87361 1.19081 6.87367 0.887485 6.47619Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="14px"
          left="0px"
          {...getOverrideProps(overrides, "Vector 1")}
        ></Icon>
        <Icon
          width="4px"
          height="8px"
          viewBox={{ minX: 0, minY: 0, width: 4, height: 8 }}
          paths={[
            {
              d: "M0.887485 6.47619L0.639133 6.04223L0.61044 6.05865L0.58416 6.07871L0.887485 6.47619ZM0.407428 -0.139805C0.231642 0.463798 0.191849 0.986246 0.405288 1.40373C0.628661 1.84063 1.04928 2.01 1.38482 2.10268C1.55783 2.15046 1.74448 2.18698 1.9157 2.22084C2.09344 2.25599 2.26312 2.28982 2.43214 2.33446C2.76753 2.42305 3.06736 2.54644 3.32043 2.76368L3.97179 2.00492C3.55921 1.65073 3.09817 1.47609 2.68751 1.36762C2.48349 1.31373 2.28384 1.27428 2.1097 1.23984C1.92905 1.20411 1.78127 1.17473 1.65105 1.13877C1.38014 1.06394 1.31912 0.994373 1.29567 0.948511C1.26229 0.88322 1.2105 0.679059 1.36754 0.139805L0.407428 -0.139805ZM3.32043 2.76368C3.42167 2.8506 3.46479 2.92918 3.48411 2.99596C3.50431 3.06579 3.50822 3.15713 3.47821 3.28007C3.41445 3.5412 3.21534 3.87244 2.88968 4.24307C2.24658 4.97496 1.27242 5.6798 0.639133 6.04223L1.13584 6.91015C1.83387 6.51067 2.90468 5.741 3.64089 4.90314C4.00488 4.48888 4.32902 4.01144 4.44967 3.51725C4.51186 3.26252 4.52327 2.98954 4.44471 2.71803C4.36528 2.44349 4.20337 2.20372 3.97179 2.00492L3.32043 2.76368ZM0.887485 6.47619C0.58416 6.07871 0.584058 6.07878 0.583949 6.07887C0.583903 6.0789 0.583785 6.07899 0.583692 6.07906C0.583506 6.07921 0.583288 6.07937 0.583041 6.07956C0.582545 6.07994 0.581929 6.08041 0.581193 6.08098C0.579722 6.08211 0.577776 6.08361 0.575378 6.08547C0.570583 6.08919 0.563973 6.09435 0.555736 6.10085C0.539274 6.11385 0.516235 6.13227 0.488125 6.15538C0.432093 6.20142 0.354927 6.26685 0.269004 6.34554C0.103735 6.49688 -0.120182 6.72084 -0.279551 6.96407C-0.358827 7.08506 -0.440819 7.23857 -0.478516 7.41117C-0.518119 7.59249 -0.51294 7.82258 -0.373156 8.03593C-0.239536 8.23986 -0.0327237 8.35141 0.168197 8.41274C0.370053 8.47436 0.611685 8.5 0.887479 8.5L0.887479 7.5C0.664066 7.5 0.531294 7.47802 0.460145 7.45631C0.388063 7.4343 0.423273 7.4268 0.463292 7.48788C0.509476 7.55837 0.499055 7.62179 0.498453 7.62454C0.498416 7.62471 0.499007 7.622 0.501045 7.61622C0.503075 7.61047 0.506265 7.60246 0.51109 7.59215C0.520941 7.5711 0.535779 7.54435 0.556894 7.51212C0.647129 7.3744 0.797619 7.2174 0.944355 7.08303C1.01444 7.01886 1.07767 6.96524 1.12304 6.92796C1.14563 6.90939 1.16354 6.89508 1.17536 6.88575C1.18126 6.88109 1.18562 6.8777 1.18826 6.87565C1.18958 6.87463 1.19046 6.87394 1.1909 6.87361C1.19111 6.87344 1.19122 6.87336 1.1912 6.87337C1.1912 6.87338 1.19116 6.87341 1.1911 6.87346C1.19106 6.87348 1.19099 6.87354 1.19097 6.87355C1.1909 6.87361 1.19081 6.87367 0.887485 6.47619Z",
              stroke: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="22px"
          left="4px"
          transformOrigin="top left"
          transform="rotate(180deg)"
          {...getOverrideProps(overrides, "Vector 2")}
        ></Icon>
      </View>
      <Button
        width="unset"
        height="unset"
        border="1px SOLID rgba(255,255,255,1)"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        color="white"
        children="Dashboard"
        {...getOverrideProps(overrides, "Button38981054")}
      ></Button>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="notification"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Flex>
      <Button
        width="unset"
        height="unset"
        border="1px SOLID rgba(255,255,255,1)"
        padding="7px 15px 7px 15px"
        shrink="0"
        backgroundColor="rgba(0,0,0,1)"
        size="default"
        isDisabled={false}
        variation="link"
        color="white"
        children="Log Out"
        onClick={() => {
          buttonThreeEightNineNineOneOneOneEightOnClick();
        }}
        {...getOverrideProps(overrides, "Button38991118")}
      ></Button>
    </Flex>
  );
}
