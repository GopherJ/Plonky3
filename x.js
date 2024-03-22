const {BigNumber} = require('bignumber.js')

const arr = [
    // WARNING: The AVX2 Goldilocks specialization relies on all round constants being in
    // 0..0xfffeeac900011537. If these constants are randomly regenerated, there is a ~.6% chance
    // that this condition will no longer hold.
    //
    // WARNING: If these are changed in any way, then all the
    // implementations of Poseidon must be regenerated. See comments
    // in `poseidon_goldilocks.rs`.
    BigNumber(0xb585f766f2144405), BigNumber(0x7746a55f43921ad7), BigNumber(0xb2fb0d31cee799b4), BigNumber(0x0f6760a4803427d7),
    BigNumber(0xe10d666650f4e012), BigNumber(0x8cae14cb07d09bf1), BigNumber(0xd438539c95f63e9f), BigNumber(0xef781c7ce35b4c3d),
    BigNumber(0xcdc4a239b0c44426), BigNumber(0x277fa208bf337bff), BigNumber(0xe17653a29da578a1), BigNumber(0xc54302f225db2c76),
    BigNumber(0x86287821f722c881), BigNumber(0x59cd1a8a41c18e55), BigNumber(0xc3b919ad495dc574), BigNumber(0xa484c4c5ef6a0781),
    BigNumber(0x308bbd23dc5416cc), BigNumber(0x6e4a40c18f30c09c), BigNumber(0x9a2eedb70d8f8cfa), BigNumber(0xe360c6e0ae486f38),
    BigNumber(0xd5c7718fbfc647fb), BigNumber(0xc35eae071903ff0b), BigNumber(0x849c2656969c4be7), BigNumber(0xc0572c8c08cbbbad),
    BigNumber(0xe9fa634a21de0082), BigNumber(0xf56f6d48959a600d), BigNumber(0xf7d713e806391165), BigNumber(0x8297132b32825daf),
    BigNumber(0xad6805e0e30b2c8a), BigNumber(0xac51d9f5fcf8535e), BigNumber(0x502ad7dc18c2ad87), BigNumber(0x57a1550c110b3041),
    BigNumber(0x66bbd30e6ce0e583), BigNumber(0x0da2abef589d644e), BigNumber(0xf061274fdb150d61), BigNumber(0x28b8ec3ae9c29633),
    BigNumber(0x92a756e67e2b9413), BigNumber(0x70e741ebfee96586), BigNumber(0x019d5ee2af82ec1c), BigNumber(0x6f6f2ed772466352),
    BigNumber(0x7cf416cfe7e14ca1), BigNumber(0x61df517b86a46439), BigNumber(0x85dc499b11d77b75), BigNumber(0x4b959b48b9c10733),
    BigNumber(0xe8be3e5da8043e57), BigNumber(0xf5c0bc1de6da8699), BigNumber(0x40b12cbf09ef74bf), BigNumber(0xa637093ecb2ad631),
    BigNumber(0x3cc3f892184df408), BigNumber(0x2e479dc157bf31bb), BigNumber(0x6f49de07a6234346), BigNumber(0x213ce7bede378d7b),
    BigNumber(0x5b0431345d4dea83), BigNumber(0xa2de45780344d6a1), BigNumber(0x7103aaf94a7bf308), BigNumber(0x5326fc0d97279301),
    BigNumber(0xa9ceb74fec024747), BigNumber(0x27f8ec88bb21b1a3), BigNumber(0xfceb4fda1ded0893), BigNumber(0xfac6ff1346a41675),
    BigNumber(0x7131aa45268d7d8c), BigNumber(0x9351036095630f9f), BigNumber(0xad535b24afc26bfb), BigNumber(0x4627f5c6993e44be),
    BigNumber(0x645cf794b8f1cc58), BigNumber(0x241c70ed0af61617), BigNumber(0xacb8e076647905f1), BigNumber(0x3737e9db4c4f474d),
    BigNumber(0xe7ea5e33e75fffb6), BigNumber(0x90dee49fc9bfc23a), BigNumber(0xd1b1edf76bc09c92), BigNumber(0x0b65481ba645c602),
    BigNumber(0x99ad1aab0814283b), BigNumber(0x438a7c91d416ca4d), BigNumber(0xb60de3bcc5ea751c), BigNumber(0xc99cab6aef6f58bc),
    BigNumber(0x69a5ed92a72ee4ff), BigNumber(0x5e7b329c1ed4ad71), BigNumber(0x5fc0ac0800144885), BigNumber(0x32db829239774eca),
    BigNumber(0x0ade699c5830f310), BigNumber(0x7cc5583b10415f21), BigNumber(0x85df9ed2e166d64f), BigNumber(0x6604df4fee32bcb1),
    BigNumber(0xeb84f608da56ef48), BigNumber(0xda608834c40e603d), BigNumber(0x8f97fe408061f183), BigNumber(0xa93f485c96f37b89),
    BigNumber(0x6704e8ee8f18d563), BigNumber(0xcee3e9ac1e072119), BigNumber(0x510d0e65e2b470c1), BigNumber(0xf6323f486b9038f0),
    BigNumber(0x0b508cdeffa5ceef), BigNumber(0xf2417089e4fb3cbd), BigNumber(0x60e75c2890d15730), BigNumber(0xa6217d8bf660f29c),
    BigNumber(0x7159cd30c3ac118e), BigNumber(0x839b4e8fafead540), BigNumber(0x0d3f3e5e82920adc), BigNumber(0x8f7d83bddee7bba8),
    BigNumber(0x780f2243ea071d06), BigNumber(0xeb915845f3de1634), BigNumber(0xd19e120d26b6f386), BigNumber(0x016ee53a7e5fecc6),
    BigNumber(0xcb5fd54e7933e477), BigNumber(0xacb8417879fd449f), BigNumber(0x9c22190be7f74732), BigNumber(0x5d693c1ba3ba3621),
    BigNumber(0xdcef0797c2b69ec7), BigNumber(0x3d639263da827b13), BigNumber(0xe273fd971bc8d0e7), BigNumber(0x418f02702d227ed5),
    BigNumber(0x8c25fda3b503038c), BigNumber(0x2cbaed4daec8c07c), BigNumber(0x5f58e6afcdd6ddc2), BigNumber(0x284650ac5e1b0eba),
    BigNumber(0x635b337ee819dab5), BigNumber(0x9f9a036ed4f2d49f), BigNumber(0xb93e260cae5c170e), BigNumber(0xb0a7eae879ddb76d),
    BigNumber(0xd0762cbc8ca6570c), BigNumber(0x34c6efb812b04bf5), BigNumber(0x40bf0ab5fa14c112), BigNumber(0xb6b570fc7c5740d3),
    BigNumber(0x5a27b9002de33454), BigNumber(0xb1a5b165b6d2b2d2), BigNumber(0x8722e0ace9d1be22), BigNumber(0x788ee3b37e5680fb),
    BigNumber(0x14a726661551e284), BigNumber(0x98b7672f9ef3b419), BigNumber(0xbb93ae776bb30e3a), BigNumber(0x28fd3b046380f850),
    BigNumber(0x30a4680593258387), BigNumber(0x337dc00c61bd9ce1), BigNumber(0xd5eca244c7a4ff1d), BigNumber(0x7762638264d279bd),
    BigNumber(0xc1e434bedeefd767), BigNumber(0x0299351a53b8ec22), BigNumber(0xb2d456e4ad251b80), BigNumber(0x3e9ed1fda49cea0b),
    BigNumber(0x2972a92ba450bed8), BigNumber(0x20216dd77be493de), BigNumber(0xadffe8cf28449ec6), BigNumber(0x1c4dbb1c4c27d243),
    BigNumber(0x15a16a8a8322d458), BigNumber(0x388a128b7fd9a609), BigNumber(0x2300e5d6baedf0fb), BigNumber(0x2f63aa8647e15104),
    BigNumber(0xf1c36ce86ecec269), BigNumber(0x27181125183970c9), BigNumber(0xe584029370dca96d), BigNumber(0x4d9bbc3e02f1cfb2),
    BigNumber(0xea35bc29692af6f8), BigNumber(0x18e21b4beabb4137), BigNumber(0x1e3b9fc625b554f4), BigNumber(0x25d64362697828fd),
    BigNumber(0x5a3f1bb1c53a9645), BigNumber(0xdb7f023869fb8d38), BigNumber(0xb462065911d4e1fc), BigNumber(0x49c24ae4437d8030),
    BigNumber(0xd793862c112b0566), BigNumber(0xaadd1106730d8feb), BigNumber(0xc43b6e0e97b0d568), BigNumber(0xe29024c18ee6fca2),
    BigNumber(0x5e50c27535b88c66), BigNumber(0x10383f20a4ff9a87), BigNumber(0x38e8ee9d71a45af8), BigNumber(0xdd5118375bf1a9b9),
    BigNumber(0x775005982d74d7f7), BigNumber(0x86ab99b4dde6c8b0), BigNumber(0xb1204f603f51c080), BigNumber(0xef61ac8470250ecf),
    BigNumber(0x1bbcd90f132c603f), BigNumber(0x0cd1dabd964db557), BigNumber(0x11a3ae5beb9d1ec9), BigNumber(0xf755bfeea585d11d),
    BigNumber(0xa3b83250268ea4d7), BigNumber(0x516306f4927c93af), BigNumber(0xddb4ac49c9efa1da), BigNumber(0x64bb6dec369d4418),
    BigNumber(0xf9cc95c22b4c1fcc), BigNumber(0x08d37f755f4ae9f6), BigNumber(0xeec49b613478675b), BigNumber(0xf143933aed25e0b0),
    BigNumber(0xe4c5dd8255dfc622), BigNumber(0xe7ad7756f193198e), BigNumber(0x92c2318b87fff9cb), BigNumber(0x739c25f8fd73596d),
    BigNumber(0x5636cac9f16dfed0), BigNumber(0xdd8f909a938e0172), BigNumber(0xc6401fe115063f5b), BigNumber(0x8ad97b33f1ac1455),
    BigNumber(0x0c49366bb25e8513), BigNumber(0x0784d3d2f1698309), BigNumber(0x530fb67ea1809a81), BigNumber(0x410492299bb01f49),
    BigNumber(0x139542347424b9ac), BigNumber(0x9cb0bd5ea1a1115e), BigNumber(0x02e3f615c38f49a1), BigNumber(0x985d4f4a9c5291ef),
    BigNumber(0x775b9feafdcd26e7), BigNumber(0x304265a6384f0f2d), BigNumber(0x593664c39773012c), BigNumber(0x4f0a2e5fb028f2ce),
    BigNumber(0xdd611f1000c17442), BigNumber(0xd8185f9adfea4fd0), BigNumber(0xef87139ca9a3ab1e), BigNumber(0x3ba71336c34ee133),
    BigNumber(0x7d3a455d56b70238), BigNumber(0x660d32e130182684), BigNumber(0x297a863f48cd1f43), BigNumber(0x90e0a736a751ebb7),
    BigNumber(0x549f80ce550c4fd3), BigNumber(0x0f73b2922f38bd64), BigNumber(0x16bf1f73fb7a9c3f), BigNumber(0x6d1f5a59005bec17),
    BigNumber(0x02ff876fa5ef97c4), BigNumber(0xc5cb72a2a51159b0), BigNumber(0x8470f39d2d5c900e), BigNumber(0x25abb3f1d39fcb76),
    BigNumber(0x23eb8cc9b372442f), BigNumber(0xd687ba55c64f6364), BigNumber(0xda8d9e90fd8ff158), BigNumber(0xe3cbdc7d2fe45ea7),
    BigNumber(0xb9a8c9b3aee52297), BigNumber(0xc0d28a5c10960bd3), BigNumber(0x45d7ac9b68f71a34), BigNumber(0xeeb76e397069e804),
    BigNumber(0x3d06c8bd1514e2d9), BigNumber(0x9c9c98207cb10767), BigNumber(0x65700b51aedfb5ef), BigNumber(0x911f451539869408),
    BigNumber(0x7ae6849fbc3a0ec6), BigNumber(0x3bb340eba06afe7e), BigNumber(0xb46e9d8b682ea65e), BigNumber(0x8dcf22f9a3b34356),
    BigNumber(0x77bdaeda586257a7), BigNumber(0xf19e400a5104d20d), BigNumber(0xc368a348e46d950f), BigNumber(0x9ef1cd60e679f284),
    BigNumber(0xe89cd854d5d01d33), BigNumber(0x5cd377dc8bb882a2), BigNumber(0xa7b0fb7883eee860), BigNumber(0x7684403ec392950d),
    BigNumber(0x5fa3f06f4fed3b52), BigNumber(0x8df57ac11bc04831), BigNumber(0x2db01efa1e1e1897), BigNumber(0x54846de4aadb9ca2),
    BigNumber(0xba6745385893c784), BigNumber(0x541d496344d2c75b), BigNumber(0xe909678474e687fe), BigNumber(0xdfe89923f6c9c2ff),
    BigNumber(0xece5a71e0cfedc75), BigNumber(0x5ff98fd5d51fe610), BigNumber(0x83e8941918964615), BigNumber(0x5922040b47f150c1),
    BigNumber(0xf97d750e3dd94521), BigNumber(0x5080d4c2b86f56d7), BigNumber(0xa7de115b56c78d70), BigNumber(0x6a9242ac87538194),
    BigNumber(0xf7856ef7f9173e44), BigNumber(0x2265fc92feb0dc09), BigNumber(0x17dfc8e4f7ba8a57), BigNumber(0x9001a64209f21db8),
    BigNumber(0x90004c1371b893c5), BigNumber(0xb932b7cf752e5545), BigNumber(0xa0b1df81b6fe59fc), BigNumber(0x8ef1dd26770af2c2),
    BigNumber(0x0541a4f9cfbeed35), BigNumber(0x9e61106178bfc530), BigNumber(0xb3767e80935d8af2), BigNumber(0x0098d5782065af06),
    BigNumber(0x31d191cd5c1466c7), BigNumber(0x410fefafa319ac9d), BigNumber(0xbdf8f242e316c4ab), BigNumber(0x9e8cd55b57637ed0),
    BigNumber(0xde122bebe9a39368), BigNumber(0x4d001fd58f002526), BigNumber(0xca6637000eb4a9f8), BigNumber(0x2f2339d624f91f78),
    BigNumber(0x6d1a7918c80df518), BigNumber(0xdf9a4939342308e9), BigNumber(0xebc2151ee6c8398c), BigNumber(0x03cc2ba8a1116515),
    BigNumber(0xd341d037e840cf83), BigNumber(0x387cb5d25af4afcc), BigNumber(0xbba2515f22909e87), BigNumber(0x7248fe7705f38e47),
    BigNumber(0x4d61e56a525d225a), BigNumber(0x262e963c8da05d3d), BigNumber(0x59e89b094d220ec2), BigNumber(0x055d5b52b78b9c5e),
    BigNumber(0x82b27eb33514ef99), BigNumber(0xd30094ca96b7ce7b), BigNumber(0xcf5cb381cd0a1535), BigNumber(0xfeed4db6919e5a7c),
    BigNumber(0x41703f53753be59f), BigNumber(0x5eeea940fcde8b6f), BigNumber(0x4cd1f1b175100206), BigNumber(0x4a20358574454ec0),
    BigNumber(0x1478d361dbbf9fac), BigNumber(0x6f02dc07d141875c), BigNumber(0x296a202ed8e556a2), BigNumber(0x2afd67999bf32ee5),
    BigNumber(0x7acfd96efa95491d), BigNumber(0x6798ba0c0abb2c6d), BigNumber(0x34c6f57b26c92122), BigNumber(0x5736e1bad206b5de),
    BigNumber(0x20057d2a0056521b), BigNumber(0x3dea5bd5d0578bd7), BigNumber(0x16e50d897d4634ac), BigNumber(0x29bff3ecb9b7a6e3),
    BigNumber(0x475cd3205a3bdcde), BigNumber(0x18a42105c31b7e88), BigNumber(0x023e7414af663068), BigNumber(0x15147108121967d7),
    BigNumber(0xe4a3dff1d7d6fef9), BigNumber(0x01a8d1a588085737), BigNumber(0x11b4c74eda62beef), BigNumber(0xe587cc0d69a73346),
    BigNumber(0x1ff7327017aa2a6e), BigNumber(0x594e29c42473d06b), BigNumber(0xf6f31db1899b12d5), BigNumber(0xc02ac5e47312d3ca),
    BigNumber(0xe70201e960cb78b8), BigNumber(0x6f90ff3b6a65f108), BigNumber(0x42747a7245e7fa84), BigNumber(0xd1f507e43ab749b2),
    BigNumber(0x1c86d265f15750cd), BigNumber(0x3996ce73dd832c1c), BigNumber(0x8e7fba02983224bd), BigNumber(0xba0dec7103255dd4),
    BigNumber(0x9e9cbd781628fc5b), BigNumber(0xdae8645996edd6a5), BigNumber(0xdebe0853b1a1d378), BigNumber(0xa49229d24d014343),
    BigNumber(0x7be5b9ffda905e1c), BigNumber(0xa3c95eaec244aa30), BigNumber(0x0230bca8f4df0544), BigNumber(0x4135c2bebfe148c6),
    BigNumber(0x166fc0cc438a3c72), BigNumber(0x3762b59a8ae83efa), BigNumber(0xe8928a4c89114750), BigNumber(0x2a440b51a4945ee5),
    BigNumber(0x80cefd2b7d99ff83), BigNumber(0xbb9879c6e61fd62a), BigNumber(0x6e7c8f1a84265034), BigNumber(0x164bb2de1bbeddc8),
    BigNumber(0xf3c12fe54d5c653b), BigNumber(0x40b9e922ed9771e2), BigNumber(0x551f5b0fbe7b1840), BigNumber(0x25032aa7c4cb1811),
    BigNumber(0xaaed34074b164346), BigNumber(0x8ffd96bbf9c9c81d), BigNumber(0x70fc91eb5937085c), BigNumber(0x7f795e2a5f915440),
    BigNumber(0x4543d9df5476d3cb), BigNumber(0xf172d73e004fc90d), BigNumber(0xdfd1c4febcc81238), BigNumber(0xbc8dfb627fe558fc),
]

for (let r=0; r<30; r++) {
  for (let i = 0; i < 8; i++) {
    const index = i + r*12
    console.log(arr[index].toString())
  }
}
