import {Address} from "@nomicfoundation/ethereumjs-util";
import {EdrContext, State} from "@ignored/edr";

const alchemyUrl = process.env.ALCHEMY_URL;
if (!alchemyUrl) {
    throw new Error("Please set your ALCHEMY_URL as an environment variable");
}

(async () => {
    const address = Address.fromString(
        "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    );
    const context = new EdrContext();
    const state = await State.forkRemote(context, alchemyUrl, BigInt(16220843), [])
    const account = await state.getAccountByAddress(address.buf);
    console.log(account);
})().then(() => {
    console.log("success");
})
