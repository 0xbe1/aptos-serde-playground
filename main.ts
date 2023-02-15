import { BCS, HexString } from "aptos";
// import { AccountAddress } from "aptos/src/aptos_types/account_address";

type DType = "bool" | "u64" | "u8" | "address" | "vector<u8>" | "0x1::string::String";

function bcsDeserialize(type: DType, value: string) {
    const data = new Uint8Array(new HexString(value).toUint8Array())
    const de = new BCS.Deserializer(data);
    switch (type) {
        case "bool":
            return de.deserializeBool();
        case "u64":
            return de.deserializeU64();
        case "u8":
            return de.deserializeU8();
        // case "address":
        //     return AccountAddress.deserialize(de);
        // case "vector<u8>":
        //     return de.deserializeVectorU8();
        case "0x1::string::String":
            return de.deserializeStr();
        default:
            return "";
    }
}

// get this json from ans: https://explorer.aptoslabs.com/account/0x867ed1f6bf916171b1de3ee92849b8978b7d1b9e0a8cc982a3d19d535dfd9c0c/resources
const data = [
    {
      "key": "enabled",
      "value": {
        "type": "bool",
        "value": "0x01"
      }
    },
    {
      "key": "admin_address",
      "value": {
        "type": "address",
        "value": "0x91945b4672607a327019e768dd6045d1254d1102d882df434ca734250bb3581d"
      }
    },
    {
      "key": "domain_price_3",
      "value": {
        "type": "u64",
        "value": "0x0050d6dc01000000"
      }
    },
    {
      "key": "domain_price_4",
      "value": {
        "type": "u64",
        "value": "0x00286bee00000000"
      }
    },
    {
      "key": "domain_price_5",
      "value": {
        "type": "u64",
        "value": "0x0094357700000000"
      }
    },
    {
      "key": "domain_price_6",
      "value": {
        "type": "u64",
        "value": "0x0065cd1d00000000"
      }
    },
    {
      "key": "subdomain_price",
      "value": {
        "type": "u64",
        "value": "0x0000000000000000"
      }
    },
    {
      "key": "max_domain_length",
      "value": {
        "type": "u64",
        "value": "0x3f00000000000000"
      }
    },
    {
      "key": "min_domain_length",
      "value": {
        "type": "u64",
        "value": "0x0300000000000000"
      }
    },
    {
      "key": "captcha_public_key",
      "value": {
        "type": "vector<u8>",
        "value": "0x20667a0687c3e7fc831366372667c11e4aa4502be09e7c99a5303711ce4f0b0fe2"
      }
    },
    {
      "key": "tokendata_url_prefix",
      "value": {
        "type": "0x1::string::String",
        "value": "0x3368747470733a2f2f7777772e6170746f736e616d65732e636f6d2f6170692f6d61696e6e65742f76312f6d657461646174612f"
      }
    },
    {
      "key": "tokendata_description",
      "value": {
        "type": "0x1::string::String",
        "value": "0x305468697320697320616e206f6666696369616c204170746f73204c616273204e616d652053657276696365204e616d65"
      }
    },
    {
      "key": "fund_destination_address",
      "value": {
        "type": "address",
        "value": "0x78ee3915e67ef5d19fa91d1e05e60ae08751efd12ce58e23fc1109de87ea7865"
      }
    },
    {
      "key": "unrestricted_mint_enabled",
      "value": {
        "type": "bool",
        "value": "0x01"
      }
    },
    {
      "key": "max_number_of_years_registered",
      "value": {
        "type": "u8",
        "value": "0x02"
      }
    }
  ]

data.forEach(({key, value}) => {
    console.log(key, bcsDeserialize(value.type as DType, value.value));
})
