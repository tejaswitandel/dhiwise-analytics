import React from "react";

import {
  Stack,
  Column,
  Row,
  Text,
  Img,
  Line,
  SelectBox,
  List,
  Slider,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const DesktopOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/chart");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="bg-gray_50 font-circularstd h-[1369px] mx-[auto] md:pb-[11px] sm:pb-[15px] pb-[16px] md:pr-[11px] sm:pr-[15px] pr-[16px] relative w-[100%]">
        <Column className="absolute flex flex-col items-center justify-start max-w-[1116px] sm:pl-[15px] sm:pr-[15px] right-[1%] top-[7%] w-[100%]">
          <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                  November
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                  <Img
                    src="images/img_mail.svg"
                    className="md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                    alt="mail"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                    <Text
                      className="font-medium text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Total user(1000)
                    </Text>
                    <Line className="bg-bluegray_100 sm:h-[10px] md:h-[12px] h-[17px] mb-[1px] w-[1px]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Text
                        className="font-medium text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Downalod screen(839)
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                        <Img
                          src="images/img_arrowup.svg"
                          className="cursor-pointer flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                          onClick={() => sliderRef.current?.slidePrev()}
                          alt="arrowup"
                        />
                        <Text
                          className="flex-grow text-green_901"
                          as="h6"
                          variant="h6"
                        >
                          42%
                        </Text>
                      </Row>
                    </Row>
                  </Row>
                </Row>
              </Row>
              <SelectBox
                className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[17%]"
                placeholderClassName="text-gray_900_dd"
                name="FrameEightyThree"
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
            <List
              className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[66%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[55%]">
                    <Text
                      className="font-medium text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Donwload
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Img
                        src="images/img_arrowup.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="arrowup One"
                      />
                      <Text
                        className="flex-grow text-green_901 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                        as="h6"
                        variant="h6"
                      >
                        17% last month
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    500
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[55%]">
                    <Text
                      className="font-medium text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Vs Code
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Img
                        src="images/img_arrowup.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="arrowup Two"
                      />
                      <Text
                        className="flex-grow text-green_901 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                        as="h6"
                        variant="h6"
                      >
                        17% last month
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    500
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] rounded-radius10 shadow-bs w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[55%]">
                    <Text
                      className="font-medium text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Deploy
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[11px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Img
                        src="images/img_arrowup.svg"
                        className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                        alt="arrowup Three"
                      />
                      <Text
                        className="flex-grow text-green_901 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                        as="h6"
                        variant="h6"
                      >
                        17% last month
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    500
                  </Text>
                </Row>
              </Column>
            </List>
          </Column>
          <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
            <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
              Total source code downloand/sync (2000)
            </Text>
            <Column className="flex flex-col items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
              <Stack className="bg-white_A700 h-[386px] md:p-[11px] sm:p-[15px] p-[16px] relative rounded-radius10 shadow-bs1 w-[100%]">
                <Column className="absolute flex flex-col font-roboto h-[max-content] inset-[0] items-center justify-center m-[auto] sm:mx-[0] pb-[1px] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Column className="flex flex-col justify-start sm:mb-[17px] md:mb-[22px] mb-[33px] sm:mx-[0] pl-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[3%]">
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        700
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        600
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        500
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        400
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        300
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        200
                      </Text>
                      <Text
                        className="sm:ml-[4px] md:ml-[6px] ml-[9px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        100
                      </Text>
                      <Text
                        className="mb-[2px] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                        variant="body1"
                      >
                        0
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center justify-start mt-[102px] sm:mt-[54px] md:mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Line className="bg-gray_300_b2 h-[1px] w-[100%]" />
                      <Stack className="h-[194px] sm:mt-[10px] md:mt-[13px] mt-[20px] relative w-[100%]">
                        <Column className="absolute bottom-[2%] flex flex-col inset-x-[0] items-center justify-start sm:px-[0] w-[100%]">
                          <Line className="bg-gray_300_b2 h-[1px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                        </Column>
                        <Img
                          src="images/img_blue.svg"
                          className="absolute h-[194px] max-w-[100%] w-[100%]"
                          alt="Blue"
                        />
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[4px] md:mt-[6px] mt-[9px] sm:px-[0] w-[100%]">
                        <Column className="flex flex-col items-center sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[4%]">
                          <Text
                            className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                            variant="body1"
                          >
                            Jan
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[4%]">
                          <Text
                            className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                            variant="body1"
                          >
                            Feb
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] p-[3px] sm:px-[0] sm:w-[100%] w-[4%]">
                          <Text
                            className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                            variant="body1"
                          >
                            Mar
                          </Text>
                        </Column>
                        <List
                          className="sm:gap-[29px] md:gap-[38px] gap-[56.27px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[13%]"
                          orientation="horizontal"
                        >
                          <Column className="flex flex-col items-center justify-end p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mt-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Apr
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-end p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mt-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              May
                            </Text>
                          </Column>
                        </List>
                        <List
                          className="sm:gap-[29px] md:gap-[38px] gap-[56.26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[21%]"
                          orientation="horizontal"
                        >
                          <Column className="flex flex-col items-center justify-start p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Jun
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-end p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mt-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              July
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-end p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mt-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Aug
                            </Text>
                          </Column>
                        </List>
                        <List
                          className="sm:gap-[29px] md:gap-[38px] gap-[56.26px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[13%]"
                          orientation="horizontal"
                        >
                          <Column className="flex flex-col items-center justify-end p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mt-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Sep
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Oct
                            </Text>
                          </Column>
                        </List>
                        <List
                          className="sm:gap-[29px] md:gap-[38px] gap-[56.26px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[13%]"
                          orientation="horizontal"
                        >
                          <Column className="flex flex-col items-center justify-start p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Nov
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start p-[3px] sm:px-[0] w-[100%]">
                            <Text
                              className="mb-[1px] not-italic text-black_900_99 w-[auto]"
                              variant="body1"
                            >
                              Dec
                            </Text>
                          </Column>
                        </List>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <SelectBox
                  className="absolute font-inter font-normal sm:mx-[0] not-italic right-[2%] text-[12px] text-gray_900_dd top-[4%] tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[14%]"
                  placeholderClassName="text-gray_900_dd"
                  name="GroupEightyThree"
                  placeholder="Number"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="w-[13px] h-[14px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%] right-[2%] absolute"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder3"
                  size="sm"
                  variant="OutlineGray300"
                ></SelectBox>
              </Stack>
            </Column>
          </Column>
        </Column>
        <Stack className="absolute h-[804px] inset-x-[0] max-w-[1424px] mx-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Slider
            slidesToShow={2}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00]"
            ref={sliderRef}
            className="inset-x-[0] mx-[auto] top-[2%] sm:w-[100%] w-[99%]"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <header className="w-[100%]">
                  <Column className="flex flex-col items-center justify-start rounded-radius10 shadow-bs2 w-[100%]">
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pr-[15px] md:pr-[289px] pr-[420px] rounded-radius10 w-[100%]">
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                        <Column className="flex flex-col items-center justify-end sm:px-[3px] md:px-[4px] px-[7px] rounded-radius3 w-[100%]">
                          <Text
                            className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-blue_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Dashboard
                          </Text>
                          <div className="bg-blue_A700 sm:h-[4px] md:h-[5px] h-[6px] mt-[4px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                        </Column>
                      </Column>
                      <Column className="flex flex-col items-center md:ml-[21px] ml-[31px] sm:mx-[0] sm:px-[0] rounded-radius3 sm:w-[100%] w-[26%]">
                        <Text
                          className="common-pointer font-medium text-gray_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                          onClick={handleNavigate2}
                        >
                          Download source code
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center md:ml-[32px] ml-[47px] sm:mx-[0] sm:px-[0] rounded-radius3 sm:w-[100%] w-[21%]">
                        <Text
                          className="font-medium text-gray_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Vs Code download
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center md:ml-[33px] ml-[48px] sm:mx-[0] sm:px-[0] rounded-radius3 sm:w-[100%] w-[19%]">
                        <Text
                          className="font-medium text-gray_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Deploy on vercel
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </header>
              </React.Fragment>
            ))}
            Indicator={({ isActive }) => {
              if (isActive) {
                return <div className="" />;
              }
              return <div className="" role="button" tabIndex={0} />;
            }}
          />
          <Column className="absolute bg-gray_900 flex flex-col items-center justify-start sm:mx-[0] sm:w-[100%] w-[21%]">
            <Column className="flex flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
              <Column className="flex flex-col justify-start sm:mt-[36px] md:mt-[47px] mt-[69px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                <Text
                  className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Uploading screen
                </Text>
              </Column>
              <Input
                className="font-bold p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="md:mt-[6px] mt-[10px] sm:mt-[5px] w-[100%]"
                name="HomeIcon"
                placeholder="Download screen"
              ></Input>
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
            <Column className="flex flex-col items-center justify-start sm:mt-[144px] md:mt-[187px] mt-[272px] md:p-[15px] p-[23px] sm:px-[15px] sm:py-[12px] shadow-bs3 w-[100%]">
              <Row className="bg-blue_800 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center my-[1px] md:p-[12px] sm:p-[15px] p-[18px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_cut.svg"
                  className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] sm:ml-[29px] md:ml-[38px] ml-[56px] md:w-[11px] w-[16px] sm:w-[8px]"
                  alt="cut"
                />
                <Text
                  className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mr-[34px] md:mr-[44px] mr-[65px] text-white_A700"
                  as="h4"
                  variant="h4"
                >
                  Log Out
                </Text>
              </Row>
            </Column>
          </Column>
        </Stack>
      </Stack>
    </>
  );
};

export default DesktopOnePage;
