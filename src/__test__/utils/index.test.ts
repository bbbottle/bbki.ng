import {
  addOssWebpProcessStyle,
  delay,
  floatNumberToPercentageString,
  minDelay,
} from "@/utils";
import { ossProcessType } from "@/types/oss";

jest.useFakeTimers();
jest.spyOn(window, "setTimeout");

describe("floatNumberToPercentageString", () => {
  it("should return percentage string correctly", () => {
    expect(floatNumberToPercentageString(0.8)).toBe("80%");
  });
});

describe("addOssWebpProcessStyle", () => {
  it("should original url when image's url is invalid", () => {
    const originalUrl = "foo";
    expect(addOssWebpProcessStyle(originalUrl, ossProcessType.WEBP)).toEqual(
      originalUrl
    );
  });

  it("should add oss style to url correctly", () => {
    const originalUrl =
      "https://zjh-im-res.oss-cn-shenzhen.aliyuncs.com/image/xiang-jiang-river/DSCF2203-1.jpg";
    expect(addOssWebpProcessStyle(originalUrl, ossProcessType.WEBP)).toEqual(
      `${originalUrl}?x-oss-process=style/${ossProcessType.WEBP}`
    );
  });
});

describe("delay", () => {
  it("should delay correctly", () => {
    delay(5000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
  });
});

describe("minDelay", () => {
  it("should delay at least specific duration", () => {
    const promise = delay(1000);
    expect(minDelay(promise, 2000)).toEqual(promise);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  });
});
