
/**
 * (taken from real contract data)
 * example bundleSale call Data:
 * * 0x68f0bcaa0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002600000000000000000000000000000000000000000000000000000000000000004000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000019023b872dd000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa100000000000000000000000000000000000000000000000000000000000004b223b872dd000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa1000000000000000000000000000000000000000000000000000000000000052623b872dd000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa100000000000000000000000000000000000000000000000000000000000006b623b872dd000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa1000000000000000000000000000000000000000000000000000000000000057100000000000000000000000000000000
 * to be parsed as
 * trailing
 * * 0x
 * method
 * * 68f0bcaa
 * * ____
 * wtf is this
 * * 000000000000000000000000000000000000000000000000000000000000008
 * * 0000000000000000000000000000000000000000000000000000000000000012
 * * 000000000000000000000000000000000000000000000000000000000000001c
 * * 0000000000000000000000000000000000000000000000000000000000000026
 * * ____
 * address list length
 * * 00000000000000000000000000000000000000000000000000000000000000004
 * address list
 * * 000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c
 * * 000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c
 * * 000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c
 * * 000000000000000000000000bfde6246df72d3ca86419628cac46a9d2b60393c
 * * ____
 * values list length
 * * 0000000000000000000000000000000000000000000000000000000000000004
 * values list
 * * 0000000000000000000000000000000000000000000000000000000000000000
 * * 0000000000000000000000000000000000000000000000000000000000000000
 * * 0000000000000000000000000000000000000000000000000000000000000000
 * * 0000000000000000000000000000000000000000000000000000000000000000
 * * ____
 * "callData lengths" list length
 * * 0000000000000000000000000000000000000000000000000000000000000004
 * "callData lengths" list (stored: 64 hex each == 100 decimal each)
 * * 0000000000000000000000000000000000000000000000000000000000000064
 * * 0000000000000000000000000000000000000000000000000000000000000064
 * * 0000000000000000000000000000000000000000000000000000000000000064
 * * 0000000000000000000000000000000000000000000000000000000000000064
 * * ____
 * "callDatas" length (stored: 190 hex == 400 decimal)
 * * 0000000000000000000000000000000000000000000000000000000000000190
 * callDatas (length: 800 hex chars == 400 Bytes)
 * * 23b872dd (8 hex chars, 4 Bytes)
 * * 000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b (64 hex chars, 32 Bytes)
 * * 0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa1 (64 hex chars, 32 Bytes)
 * * 00000000000000000000000000000000000000000000000000000000000004b2 (64 hex chars, 32 Bytes)
 * * 23b872dd
 * * 000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b
 * * 0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa1
 * * 0000000000000000000000000000000000000000000000000000000000000526
 * * 23b872dd
 * * 000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b
 * * 0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa1
 * * 00000000000000000000000000000000000000000000000000000000000006b6
 * * 23b872dd
 * * 000000000000000000000000ee80db4997098b2b517223636f15d51a61f3549b
 * * 0000000000000000000000008e5d30f161ba3ebb09dc3c1f06515656af34baa1
 * * 0000000000000000000000000000000000000000000000000000000000000571
 * * ____
 * unused 16 Bytes (32 hex chars)
 * * 00000000000000000000000000000000
*/