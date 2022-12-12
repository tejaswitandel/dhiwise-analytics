import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  SelectBox,
  Stack,
  Line,
  List,
} from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const ChartPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/desktopone");
  }
  function handleNavigate1() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-circularstd items-center justify-start mx-[auto] md:pb-[11px] sm:pb-[15px] pb-[16px] md:pr-[11px] sm:pr-[15px] pr-[16px] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1424px] sm:mb-[50px] md:mb-[65px] mb-[95px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <aside className="md:hidden sm:hidden w-[21%]">
            <div className="">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Column className="flex flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
                  <Column
                    className="common-pointer flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]"
                    onClick={handleNavigate1}
                  >
                    <Text
                      className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Dashboard
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                    <Text
                      className="font-bold ml-[4px] text-white_A700_b2 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Uploading screen
                    </Text>
                  </Column>
                  <Text
                    className="bg-bluegray_900_93 font-bold mt-[10px] sm:mt-[5px] md:mt-[6px] md:pl-[11px] pl-[16px] md:pr-[24px] pr-[35px] sm:px-[15px] py-[12px] sm:py-[6px] md:py-[8px] rounded-radius10 text-white_A700 w-[261px]"
                    as="h4"
                    variant="h4"
                  >
                    Download screen
                  </Text>
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
            </div>
          </aside>
          <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <header className="w-[100%]">
                <Column className="flex flex-col items-center justify-start rounded-radius10 shadow-bs2 w-[100%]">
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:px-[11px] sm:px-[15px] px-[16px] rounded-radius10 w-[100%]">
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] rounded-radius3 sm:w-[100%] w-[8%]">
                      <Text
                        className="common-pointer font-medium text-gray_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                        onClick={handleNavigate}
                      >
                        Dashboard
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[21px] ml-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                      <Column className="flex flex-col items-center justify-end sm:p-[3px] md:p-[4px] p-[7px] rounded-radius3 w-[100%]">
                        <Text
                          className="font-medium mt-[10px] sm:mt-[5px] md:mt-[6px] text-blue_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Download source code
                        </Text>
                        <div className="bg-blue_A700 sm:h-[4px] md:h-[5px] h-[6px] mt-[4px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[21px] ml-[31px] sm:mx-[0] sm:px-[0] rounded-radius3 sm:w-[100%] w-[14%]">
                      <Text
                        className="font-medium text-gray_600 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Vs Code download
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center md:ml-[32px] ml-[47px] sm:mx-[0] sm:px-[0] rounded-radius3 sm:w-[100%] w-[13%]">
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Text
                      className="text-gray_901 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Month Comparison
                    </Text>
                    <SelectBox
                      className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[39%]"
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
                          className="w-[13px] mr-[10px] sm:mr-[5px] sm:w-[6px] md:mr-[6px] md:w-[8px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray300"
                    ></SelectBox>
                  </Row>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 shadow-bs w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mb-[21px] md:mb-[27px] mb-[40px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:px-[0] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:p-[15px] md:p-[21px] p-[31px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group.svg')",
                          }}
                        >
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                            <Text
                              className="font-medium text-white_A700 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              100
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-start mb-[1px] sm:mt-[36px] md:mt-[46px] mt-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                            <Text
                              className="font-bold leading-[normal] ml-[4px] sm:mx-[0] text-black_900 text-center sm:w-[100%] w-[98%]"
                              as="h2"
                              variant="h2"
                            >
                              2 Month comparison
                            </Text>
                            <Column className="flex flex-col items-center justify-start sm:mt-[35px] md:mt-[46px] mt-[67px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                              <Text
                                className="font-bold text-white_A700 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                510
                              </Text>
                            </Column>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="flex flex-col justify-start mb-[1px] sm:mt-[129px] md:mt-[167px] mt-[243px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                          <div className="bg-deep_purple_400 h-[10px] sm:h-[6px] md:h-[7px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                          <Text
                            className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] text-black_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            November
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <div className="bg-deep_purple_A700 h-[10px] sm:h-[6px] md:h-[7px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                          <Text
                            className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] text-black_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            October
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                  <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                    Time comparesion
                  </Text>
                  <Column className="bg-white_A700 flex flex-col font-roboto justify-center sm:mt-[4px] md:mt-[6px] mt-[9px] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 shadow-bs w-[100%]">
                    <Column className="flex flex-col items-end justify-start md:ml-[39px] ml-[58px] md:mr-[127px] mr-[185px] sm:mt-[20px] md:mt-[26px] mt-[39px] sm:mx-[0] sm:pl-[15px] md:pl-[41px] pl-[61px] sm:pr-[0] sm:w-[100%] w-[59%]">
                      <Stack className="h-[252px] relative w-[100%]">
                        <CircularProgressbar
                          className="absolute border-solid sm:h-[135px] md:h-[174px] h-[252px] overflow-visible w-[100%]"
                          value="86"
                          name="GroupSeven"
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
                        <Row className="absolute bottom-[10%] flex flex-row md:flex-wrap sm:flex-wrap items-start left-[5%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                          <Text
                            className="font-normal not-italic rotate-[54deg] text-white_A700 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            80%
                          </Text>
                          <Stack className="h-[179px] ml-[12px] sm:ml-[6px] md:ml-[8px] sm:mt-[4px] md:mt-[6px] mt-[9px] pb-[1px] pr-[1px] relative md:w-[123px] w-[179px] sm:w-[95px]">
                            <CircularProgressbar
                              className="absolute border-solid md:h-[123px] h-[178px] sm:h-[95px] inset-[0] justify-center m-[auto] overflow-visible md:w-[122px] w-[178px] sm:w-[94px]"
                              value="66"
                              name="GroupEight"
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
                            <Text
                              className="absolute bottom-[5%] font-normal left-[6%] not-italic rotate-[-49deg] text-white_A700 tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              60%
                            </Text>
                          </Stack>
                        </Row>
                      </Stack>
                    </Column>
                    <Column className="flex flex-col items-center justify-start md:ml-[306px] ml-[446px] sm:mx-[0] sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] py-[2px] sm:w-[100%] w-[25%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                        <div className="bg-indigo_A700 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius2 w-[15%]"></div>
                        <Text
                          className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1 Time download
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                        <div className="bg-light_blue_800 sm:h-[5px] md:h-[6px] h-[8px] my-[2px] rounded-radius2 w-[15%]"></div>
                        <Text
                          className="font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-black_900_dd tracking-ls025 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          2 Time Download
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text className="text-gray_901 w-[auto]" as="h3" variant="h3">
                  Day Base
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                  <SelectBox
                    className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[52%]"
                    placeholderClassName="text-gray_900_dd"
                    name="FrameEightyThree One"
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
                    className="font-normal sm:mx-[0] text-[12px] text-gray_900_dd tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[45%]"
                    placeholderClassName="text-gray_900_dd"
                    name="GroupEightyThree"
                    placeholder="Number"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="w-[13px] mr-[11px] sm:mr-[5px] sm:w-[6px] md:mr-[7px] md:w-[8px] max-w-[100%]"
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pt-[3px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[2%]">
                    <Text
                      className="not-italic text-black_900_99 w-[auto]"
                      variant="body1"
                    >
                      500
                    </Text>
                    <Text
                      className="sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                      variant="body1"
                    >
                      400
                    </Text>
                    <Text
                      className="sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                      variant="body1"
                    >
                      300
                    </Text>
                    <Text
                      className="sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                      variant="body1"
                    >
                      200
                    </Text>
                    <Text
                      className="sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                      variant="body1"
                    >
                      100
                    </Text>
                    <Text
                      className="ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-black_900_99 w-[auto]"
                      variant="body1"
                    >
                      0
                    </Text>
                  </Column>
                  <Column className="flex flex-col items-center justify-start md:ml-[11px] ml-[17px] sm:mt-[3px] md:mt-[4px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Line className="bg-gray_300_b2 h-[1px] sm:w-[100%] w-[99%]" />
                    <Stack className="h-[195px] sm:mt-[2px] md:mt-[3px] mt-[5px] relative sm:w-[100%] w-[99%]">
                      <Column className="absolute bottom-[16%] flex flex-col items-center justify-start top-[18%] w-[100%]">
                        <Column className="flex flex-col items-center justify-start w-[100%]">
                          <Line className="bg-gray_300_b2 h-[1px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                          <Line className="bg-gray_300_b2 h-[1px] sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]" />
                        </Column>
                      </Column>
                      <Img
                        src="images/img_scatter.svg"
                        className="absolute h-[195px] left-[0] max-w-[100%] right-[1%] w-[100%]"
                        alt="Scatter"
                      />
                    </Stack>
                    <Line className="bg-gray_300_b2 h-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:w-[100%] w-[99%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                      <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[4%]">
                        <Text
                          className="my-[1px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          15 Jan
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[4%]">
                        <Text
                          className="my-[1px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          15 Feb
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[4%]">
                        <Text
                          className="my-[2px] not-italic text-black_900_99 w-[auto]"
                          variant="body1"
                        >
                          15 Mar
                        </Text>
                      </Column>
                      <List
                        className="gap-[131.99px] sm:gap-[70px] md:gap-[90px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[20%]"
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
                      <List
                        className="gap-[131.99px] sm:gap-[70px] md:gap-[90px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[20%]"
                        orientation="horizontal"
                      >
                        <Column className="flex flex-col items-center justify-start p-[1px] sm:px-[0] w-[100%]">
                          <Text
                            className="my-[1px] not-italic text-black_900_99 w-[auto]"
                            variant="body1"
                          >
                            15 Jun
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start p-[1px] sm:px-[0] w-[100%]">
                          <Text
                            className="my-[2px] not-italic text-black_900_99 w-[auto]"
                            variant="body1"
                          >
                            15 Mar
                          </Text>
                        </Column>
                      </List>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ChartPage;
