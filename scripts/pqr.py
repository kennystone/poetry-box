import segno
import argparse

BASE_URI = "https://littlepoetrybox.com/poems/"


def main():
    parser = argparse.ArgumentParser(description="Generate QR code for poem")
    parser.add_argument(
        "poem_path", type=str, help="poem path e.g. littlepoetrybox.com/{poem-path}"
    )
    args = parser.parse_args()
    poem_url = BASE_URI + args.poem_path
    qrcode = segno.make(poem_url)
    fpath = f"qrcodes/{args.poem_path}.svg"
    qrcode.save(fpath, scale=1, dark="#6D6E71", light="#FFFFFF", kind="svg")
    print(f"QR code [{poem_url}] saved at {fpath}")


if __name__ == "__main__":
    main()
