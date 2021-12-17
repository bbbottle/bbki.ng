import {
  addOssWebpProcessStyle,
  calcDefaultImgSize,
  delay,
  floatNumberToPercentageString,
  getEnv,
  minDelay,
} from "@/utils";
import { ossProcessType } from "@/types/oss";
import { OSS_PHOTOS } from "@/constants/photos";

jest.useFakeTimers();
jest.spyOn(window, "setTimeout");

describe("calcDefaultImgSize", () => {
  it("should respect default width", () => {
    const dw = 500;
    expect(calcDefaultImgSize(OSS_PHOTOS.shopping, dw).width).toEqual(dw);
  });
  it("should return 576 as default width when photo is horizontal", () => {
    expect(calcDefaultImgSize(OSS_PHOTOS.stone).width).toEqual(576);
  });
  it("should return 384 as default width when photo is horizontal", () => {
    expect(calcDefaultImgSize(OSS_PHOTOS.player).width).toEqual(384);
  });
});

describe("floatNumberToPercentageString", () => {
  it("should return percentage string correctly", () => {
    expect(floatNumberToPercentageString(0.8)).toBe("80%");
  });
});

describe("addOssWebpProcessStyle", () => {
  it("should return original url when image's url is invalid", () => {
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

describe("getEnv", () => {
  it("should return development when href start with http://localhost", () => {
    const locationSpy = jest.spyOn(window, "location", "get");
    locationSpy.mockImplementation(
      () =>
        ({
          href: "http://localhost:3000",
        } as Location)
    );
    expect(getEnv()).toEqual("development");
    locationSpy.mockRestore();
  });
  it("should return production when href is NOT start with http://localhost", () => {
    const locationSpy = jest.spyOn(window, "location", "get");
    locationSpy.mockImplementation(
      () =>
        ({
          href: "https://bbki.ng",
        } as Location)
    );
    expect(getEnv()).toEqual("production");
    locationSpy.mockRestore();
  });
});
