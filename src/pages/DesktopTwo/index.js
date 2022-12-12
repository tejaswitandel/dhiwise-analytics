import React from "react";

import {
  Row,
  Column,
  Input,
  Text,
  SelectBox,
  Img,
  Stack,
  Line,
  List,
  Button,
  Slider,
} from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const DesktopTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/desktopone");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap font-circularstd items-start mx-[auto] md:pb-[11px] sm:pb-[15px] pb-[16px] md:pr-[11px] sm:pr-[15px] pr-[16px] w-[100%]">
        <Column className="bg-gray_900 flex flex-col items-center justify-start max-w-[292px] sm:mb-[292px] md:mb-[377px] mb-[549px] ml-[auto] mr-[auto] sm:pb-[15px] md:pb-[258px] pb-[376px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
            <Input
              className="font-bold p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              wrapClassName="md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
              name="HomeIcon"
              placeholder="Dashboard"
            ></Input>
            <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
              <Text
                className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                as="h4"
                variant="h4"
              >
                Uploading screen
              </Text>
            </Column>
            <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
              <Text
                className="common-pointer font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                as="h4"
                variant="h4"
                onClick={handleNavigate4}
              >
                Download screen
              </Text>
            </Column>
            <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
              <Text
                className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                as="h4"
                variant="h4"
              >
                Fetch screen
              </Text>
            </Column>
            <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
              <Text
                className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                as="h4"
                variant="h4"
              >
                Building apps
              </Text>
            </Column>
            <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
              <Text
                className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                as="h4"
                variant="h4"
              >
                Another screen
              </Text>
            </Column>
            <Column className="flex flex-col justify-start md:mb-[10px] mb-[15px] sm:mb-[7px] mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
              <Text
                className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                as="h4"
                variant="h4"
              >
                Select scren
              </Text>
            </Column>
          </Column>
        </Column>
        <Column className="flex flex-col items-end justify-start max-w-[1119px] sm:mb-[30px] md:mb-[39px] mb-[58px] sm:ml-[6px] md:ml-[8px] ml-[auto] mr-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                  Start to End
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                  <SelectBox
                    className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[52%]"
                    placeholderClassName="text-gray_900_dd"
                    name="FrameEightyThree"
                    placeholder="From - To"
                    isSearchable={false}
                    isMulti={false}
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          src="images/img_calendar.svg"
                          className="w-[16px] h-[16px] mr-[4px] sm:h-[9px] sm:w-[8px] md:h-[12px] md:w-[11px] max-w-[100%]"
                          alt="calendar"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder3"
                    size="sm"
                    variant="OutlineGray300"
                  ></SelectBox>
                  <SelectBox
                    className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[44%]"
                    placeholderClassName="text-gray_900_dd"
                    name="FrameEightyThree One"
                    placeholder="Number"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder3"
                    size="sm"
                    variant="OutlineGray300"
                  ></SelectBox>
                </Row>
              </Row>
              <Column className="bg-white_A700 flex flex-col font-roboto items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] p-[14px] sm:p-[7px] md:p-[9px] rounded-radius10 shadow-bs w-[100%]">
                <Column className="flex flex-col items-center justify-start md:mb-[11px] mb-[17px] sm:mb-[9px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start pt-[3px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[4%]">
                        <Text
                          className="not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          100k
                        </Text>
                        <Text
                          className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          80k
                        </Text>
                        <Text
                          className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          60k
                        </Text>
                        <Text
                          className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          40k
                        </Text>
                        <Text
                          className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          20k
                        </Text>
                        <Text
                          className="md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          0
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Stack className="h-[210px] relative w-[100%]">
                          <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
                            <Column className="flex flex-col items-center justify-start w-[100%]">
                              <Line className="bg-gray_300_b2 h-[1px] w-[100%]" />
                              <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                              <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                              <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                              <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                            </Column>
                          </Column>
                          <Img
                            src="images/img_graphlinemu.svg"
                            className="absolute h-[210px] max-w-[100%] right-[0] w-[100%]"
                            alt="GraphLineMu"
                          />
                        </Stack>
                        <Line className="bg-gray_300_b2 h-[1px] mt-[1px] w-[100%]" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                          <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[6%]">
                            <Text
                              className="my-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              15 Jan
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[6%]">
                            <Text
                              className="my-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              15 Feb
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[6%]">
                            <Text
                              className="my-[2px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              15 Mar
                            </Text>
                          </Column>
                          <List
                            className="sm:gap-[40px] md:gap-[52px] gap-[76.91px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[25%]"
                            orientation="horizontal"
                          >
                            <Column className="flex flex-col items-center justify-start p-[2px] sm:px-[0] w-[100%]">
                              <Text
                                className="my-[1px] not-italic text-black_900_99 w-[auto]"
                                variant="body1"
                              >
                                15 Apr
                              </Text>
                            </Column>
                            <Column className="flex flex-col items-center justify-start p-[1px] sm:px-[0] w-[100%]">
                              <Text
                                className="my-[2px] not-italic text-black_900_99 w-[auto]"
                                variant="body1"
                              >
                                15 May
                              </Text>
                            </Column>
                          </List>
                          <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[6%]">
                            <Text
                              className="my-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              15 Jun
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[44%]">
                      <div className="bg-yellow_900 sm:h-[5px] md:h-[6px] h-[8px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius2 w-[18%]"></div>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upload screen
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[11px] ml-[16px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[51%]">
                      <div className="bg-indigo_A700 sm:h-[5px] md:h-[6px] h-[8px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius2 w-[15%]"></div>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] my-[1px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Downalod screen
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                  Funnel
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <SelectBox
                    className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[54%]"
                    placeholderClassName="text-gray_900_dd"
                    name="FrameEightyThree Two"
                    placeholder="November"
                    isSearchable={false}
                    isMulti={false}
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          src="images/img_calendar.svg"
                          className="w-[16px] h-[16px] mr-[4px] sm:h-[9px] sm:w-[8px] md:h-[12px] md:w-[11px] max-w-[100%]"
                          alt="calendar"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder3"
                    size="sm"
                    variant="OutlineGray300"
                  ></SelectBox>
                  <SelectBox
                    className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[44%]"
                    placeholderClassName="text-gray_900_dd"
                    name="FrameEightyThree Three"
                    placeholder="Number"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder3"
                    size="sm"
                    variant="OutlineGray300"
                  ></SelectBox>
                </Row>
              </Row>
              <Column className="bg-white_A700 flex flex-col font-roboto items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 shadow-bs w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[15px] md:mb-[19px] mb-[29px] sm:mx-[0] pl-[1px] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Signup
                    </Text>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] p-[14px] sm:p-[7px] md:p-[9px] sm:w-[100%] w-[74%]"
                      style={{
                        backgroundImage: "url('images/img_group2311.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[2px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-normal not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Uplaod screen
                    </Text>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center md:ml-[23px] ml-[34px] sm:mx-[0] p-[14px] sm:p-[7px] md:p-[9px] sm:w-[100%] w-[64%]"
                      style={{
                        backgroundImage: "url('images/img_group2310.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[2px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Text
                      className="font-normal not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Fetch screen
                    </Text>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center md:ml-[46px] ml-[67px] sm:mx-[0] p-[14px] sm:p-[7px] md:p-[9px] sm:w-[100%] w-[53%]"
                      style={{
                        backgroundImage: "url('images/img_group2309.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[2px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                    <Text
                      className="font-normal not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Create action
                    </Text>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-center md:ml-[56px] ml-[82px] sm:mx-[0] p-[14px] sm:p-[7px] md:p-[9px] sm:w-[100%] w-[44%]"
                      style={{
                        backgroundImage: "url('images/img_group2308.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[2px] not-italic text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        100
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Text
                      className="font-normal not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Get source code
                    </Text>
                    <Button className="cursor-pointer font-normal min-w-[35%] sm:ml-[42px] md:ml-[55px] ml-[80px] not-italic text-[16px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]">
                      100
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            slidesToShow={2}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00]"
            ref={sliderRef}
            className="sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Text
                      className="text-gray_901 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Funnel
                    </Text>
                    <SelectBox
                      className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[14%]"
                      placeholderClassName="text-gray_900_dd"
                      name="FrameEightyThree Four"
                      placeholder="Number"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray300"
                    ></SelectBox>
                  </Row>
                  <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] rounded-radius10 shadow-bs w-[100%]">
                    <List
                      className="gap-[0] grid min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] w-[10%] sm:w-[100%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Action name
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Jan
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Feb
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Mar
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Jun
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            July
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Aug
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Set
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Oct
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Nov
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Dec
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] px-[10px] sm:px-[5px] md:px-[6px] w-[100%]">
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] md:px-[4px] px-[7px] w-[10%] sm:w-[100%]">
                          <Text
                            className="my-[3px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Create action
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            100
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            200
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            500
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            600
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            800
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            300
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="my-[1px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            -
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] px-[10px] sm:px-[5px] md:px-[6px] w-[100%]">
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] w-[10%] sm:w-[100%]">
                          <Text
                            className="not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Change view
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            100
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            200
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            500
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            600
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            800
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            300
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="my-[1px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            -
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] px-[10px] sm:px-[5px] md:px-[6px] w-[100%]">
                        <Column className="flex flex-col items-end sm:mx-[0] pl-[10px] md:pl-[6px] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            API Integration
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            100
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            200
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            500
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            600
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            800
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            300
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="my-[1px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            -
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] px-[10px] sm:px-[5px] md:px-[6px] w-[100%]">
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] w-[10%] sm:w-[100%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Code view
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            100
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            200
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            500
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            600
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            800
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            300
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="mb-[2px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            400
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] px-[10px] md:px-[6px] sm:w-[100%] w-[5%]">
                          <Text
                            className="my-[1px] not-italic text-black_900_99 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            -
                          </Text>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                </Column>
              </React.Fragment>
            ))}
          />
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[19px] md:mt-[24px] mt-[36px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                  Build comparesion
                </Text>
                <SelectBox
                  className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[35%]"
                  placeholderClassName="text-gray_900_dd"
                  name="FrameEightyThree Five"
                  placeholder="November"
                  isSearchable={false}
                  isMulti={false}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        src="images/img_calendar.svg"
                        className="w-[16px] h-[16px] mr-[4px] sm:h-[9px] sm:w-[8px] md:h-[12px] md:w-[11px] max-w-[100%]"
                        alt="calendar"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="cursor-pointer w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder3"
                  size="sm"
                  variant="OutlineGray300"
                ></SelectBox>
              </Row>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-start justify-center mt-[12px] sm:mt-[6px] md:mt-[8px] md:p-[14px] sm:p-[15px] p-[21px] rounded-radius10 shadow-bs w-[100%]">
                <Column className="flex flex-col sm:h-[151px] md:h-[195px] h-[283px] items-center justify-start sm:mb-[26px] md:mb-[33px] mb-[49px] sm:ml-[41px] md:ml-[53px] ml-[78px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:w-[150px] md:w-[194px] w-[283px]">
                  <Stack className="h-[283px] relative sm:w-[150px] md:w-[194px] w-[283px]">
                    <CircularProgressbar
                      className="absolute border-solid sm:h-[151px] md:h-[195px] h-[283px] overflow-visible w-[100%]"
                      value="86"
                      name="GroupOne"
                      strokeWidth={1}
                      styles={{
                        trail: { strokeWidth: 1, stroke: "" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(0deg)",
                        },
                      }}
                    ></CircularProgressbar>
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] items-start left-[5%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[80%]">
                      <Text
                        className="font-normal mt-[4px] not-italic rotate-[54deg] text-white_A700 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        400
                      </Text>
                      <Stack className="h-[196px] ml-[4px] pb-[1px] pr-[1px] relative sm:w-[104px] md:w-[134px] w-[196px]">
                        <CircularProgressbar
                          className="absolute border-solid sm:h-[104px] md:h-[135px] h-[195px] inset-[0] justify-center m-[auto] overflow-visible sm:w-[103px] md:w-[134px] w-[195px]"
                          value="66"
                          name="GroupTwo"
                          strokeWidth={1}
                          styles={{
                            trail: { strokeWidth: 1, stroke: "" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                            },
                          }}
                        ></CircularProgressbar>
                        <Row className="absolute bottom-[12%] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[5%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Text
                            className="font-normal sm:mt-[52px] md:mt-[67px] mt-[98px] not-italic rotate-[-49deg] text-white_A700 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            300
                          </Text>
                          <Stack className="h-[107px] md:mb-[11px] mb-[17px] sm:mb-[9px] relative sm:w-[100%] w-[73%]">
                            <CircularProgressbar
                              className="absolute border-solid h-[100px] sm:h-[54px] md:h-[69px] overflow-visible top-[0] w-[100%]"
                              value="54"
                              name="GroupThree"
                              strokeWidth={2}
                              styles={{
                                trail: { strokeWidth: 2, stroke: "" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(0deg)",
                                },
                              }}
                            ></CircularProgressbar>
                            <Text
                              className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic rotate-[2deg] text-white_A700 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                              as="h5"
                              variant="h5"
                            >
                              200
                            </Text>
                          </Stack>
                        </Row>
                      </Stack>
                    </Row>
                  </Stack>
                </Column>
                <Column className="flex flex-col items-center justify-start md:ml-[5px] ml-[8px] md:mr-[3px] mr-[5px] sm:mt-[145px] md:mt-[187px] mt-[273px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[23%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <div className="bg-indigo_A700 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius2 w-[20%]"></div>
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      1 Time Build
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                    <div className="bg-light_blue_800 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius2 w-[20%]"></div>
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      2 Time Build
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                    <div className="bg-teal_A701 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius2 w-[20%]"></div>
                    <Text
                      className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      3 Time Build
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                  Screen compare
                </Text>
                <SelectBox
                  className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[31%]"
                  placeholderClassName="text-gray_900_dd"
                  name="FrameEightyThree Six"
                  placeholder="From - To"
                  isSearchable={false}
                  isMulti={false}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        src="images/img_calendar.svg"
                        className="w-[16px] h-[16px] mr-[4px] sm:h-[9px] sm:w-[8px] md:h-[12px] md:w-[11px] max-w-[100%]"
                        alt="calendar"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="cursor-pointer w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder3"
                  size="sm"
                  variant="OutlineGray300"
                ></SelectBox>
              </Row>
              <Column className="bg-white_A700 flex flex-col font-inter items-center justify-end mt-[12px] sm:mt-[6px] md:mt-[8px] md:p-[14px] sm:p-[15px] p-[21px] shadow-bs w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[43px] md:mt-[55px] mt-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                      <Text
                        className="not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        100k
                      </Text>
                      <Text
                        className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        80k
                      </Text>
                      <Text
                        className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        60k
                      </Text>
                      <Text
                        className="ml-[4px] sm:mt-[16px] md:mt-[21px] mt-[31px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        40k
                      </Text>
                      <Text
                        className="sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        20k
                      </Text>
                      <Text
                        className="md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        0
                      </Text>
                    </Column>
                    <Stack className="font-roboto h-[227px] sm:mt-[2px] md:mt-[3px] mt-[5px] relative sm:w-[100%] w-[94%]">
                      <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
                        <Column className="flex flex-col items-center justify-start w-[100%]">
                          <Line className="bg-gray_300_b2 h-[1px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                        </Column>
                      </Column>
                      <List
                        className="absolute sm:gap-[44px] md:gap-[57px] gap-[83px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 left-[0] min-h-[auto] pb-[3px] sm:w-[100%] w-[96%]"
                        orientation="horizontal"
                      >
                        <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly w-[100%]">
                              <div className="bg-indigo_A700 sm:h-[106px] md:h-[137px] h-[199px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                              <div className="bg-yellow_900 sm:h-[47px] md:h-[60px] h-[87px] mt-[112px] sm:mt-[59px] md:mt-[77px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                            </Row>
                            <Text
                              className="mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Sep
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col items-center justify-start mb-[1px] sm:px-[0] w-[100%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly w-[100%]">
                              <div className="bg-indigo_A700 sm:h-[106px] md:h-[137px] h-[199px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                              <div className="bg-yellow_900 sm:h-[47px] md:h-[60px] h-[87px] mt-[112px] sm:mt-[59px] md:mt-[77px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                            </Row>
                            <Text
                              className="mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Octo
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col items-center justify-start mb-[1px] sm:px-[0] w-[100%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly w-[100%]">
                              <div className="bg-indigo_A700 sm:h-[106px] md:h-[137px] h-[199px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                              <div className="bg-yellow_900 sm:h-[47px] md:h-[60px] h-[87px] mt-[112px] sm:mt-[59px] md:mt-[77px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                            </Row>
                            <Text
                              className="mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Nov
                            </Text>
                          </Column>
                        </Column>
                        <Column className="flex flex-col items-center justify-start mb-[1px] sm:px-[0] w-[100%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly w-[100%]">
                              <div className="bg-indigo_A700 sm:h-[106px] md:h-[137px] h-[199px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                              <div className="bg-yellow_900 sm:h-[47px] md:h-[60px] h-[87px] mt-[112px] sm:mt-[59px] md:mt-[77px] rounded-radius5 sm:w-[100%] w-[50%]"></div>
                            </Row>
                            <Text
                              className="mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Dec
                            </Text>
                          </Column>
                        </Column>
                      </List>
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-roboto items-center justify-center sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[49%]">
                      <div className="bg-indigo_A700 sm:h-[5px] md:h-[6px] h-[8px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius2 w-[18%]"></div>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upload screen
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <div className="bg-yellow_900 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius2 w-[19%]"></div>
                      <Text
                        className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Fetch screen
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default DesktopTwoPage;
