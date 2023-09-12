import { FC } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NetworkSwitcher from './NetworkSwitcher';
import NavElement from './nav-element';

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="hidden sm:inline w-22 h-22 md:p-2 ml-10">
            <Link href="https://hxro.network" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
              <svg width="200" height="60" viewBox="0 0 541 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2066_13849)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M161.5 20C161.664 20 165.763 24.4789 165.936 24.5C165.936 24.5 168.639 27.2144 168.929 28.5192C169.214 29.7167 170.868 31.1424 171.951 32.1118C177.004 36.6834 172.293 23.8598 174 24.5C177.5 26 182.654 39.1898 183.185 41.578C183.658 43.7033 182.176 35.5 185 35.5C186.369 35.5 193.05 44.0301 193.221 44.7144C193.507 45.7978 193.564 47.0524 193.735 48.2499C193.838 49.1821 194.065 51.7854 195.274 51.7854C196.301 51.7854 197.202 50.4951 197.889 49.8082C197.889 49.8082 197.889 49.8082 198.408 49.2055C198.408 49.2055 198.709 48.9041 199.011 48.6027C200.322 47.2916 199.011 48.6027 199.915 47.6986C202.326 45.2877 200.819 46.7945 201.12 46.4931C202.024 45.589 206.114 41.9011 208.281 40.0763C213.242 35.7423 224.283 26 224.283 26C235.834 26 244.949 19 256.5 19L263.432 26C247.287 39.2155 231.114 52.3971 214.948 65.5856C214.606 65.8137 214.378 66.2129 214.378 66.498C214.378 66.669 214.435 66.9542 214.549 67.1252C228.756 80.4305 243.864 93.5731 258.5 107C260.7 109.018 263.279 112.02 265.432 114H224.432C224.432 114 204.215 95.9145 194.362 86.913C194.191 86.799 193.963 86.6279 193.735 86.5708C193.621 86.5138 193.45 86.5708 193.336 86.5708C193.05 86.5708 192.879 86.4568 192.537 86.7419C190.769 87.9965 188.83 90.2775 187.177 91.9312C185.409 93.5849 183.641 95.4098 181.93 97.0635C176.228 102.424 169.841 108.126 163.91 112.289C162.998 112.916 161.972 113.259 161.002 113.259L153 110C152 109.5 152.619 108.514 152.619 108.012C152.562 107.613 151.821 107.328 151.479 107.328C148.229 107.328 139.5 114 136.823 114L135 114C133.115 114 122.06 103.352 125 101C133.941 93.7785 146.06 89.0816 154.9 82.0088C155.186 81.7807 163 68 165.5 68C166.5 68 172.5 75.3289 172.5 75.5C172.5 85.6763 188.586 74.3883 173 71C172.202 70.8289 165.114 62.9124 165 62L164.196 60.2252C161.352 60.2252 153 51.5 153 51.5C151.165 48.5639 154.411 46.2034 149.996 44.9424C148.977 44.6366 149.022 43.3093 148.514 42.5474C147.772 41.0077 146.005 40.0953 144.75 39.2399C144.18 38.8408 143.552 38.4986 143.039 38.0424C139.732 35.0771 128.81 26.0671 128.81 26.0671L122 19L161.5 20Z" fill="url(#paint0_linear_2066_13849)" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M161.5 20C161.664 20 165.763 24.4789 165.936 24.5C165.936 24.5 168.639 27.2144 168.929 28.5192C169.214 29.7167 170.868 31.1424 171.951 32.1118C177.004 36.6834 172.293 23.8598 174 24.5C177.5 26 182.654 39.1898 183.185 41.578C183.658 43.7033 182.176 35.5 185 35.5C186.369 35.5 193.05 44.0301 193.221 44.7144C193.507 45.7978 193.564 47.0524 193.735 48.2499C193.838 49.1821 194.065 51.7854 195.274 51.7854C196.301 51.7854 197.202 50.4951 197.889 49.8082C197.889 49.8082 197.889 49.8082 198.408 49.2055C198.408 49.2055 198.709 48.9041 199.011 48.6027C200.322 47.2916 199.011 48.6027 199.915 47.6986C202.326 45.2877 200.819 46.7945 201.12 46.4931C202.024 45.589 206.114 41.9011 208.281 40.0763C213.242 35.7423 224.283 26 224.283 26C235.834 26 244.949 19 256.5 19L263.432 26C247.287 39.2155 231.114 52.3971 214.948 65.5856C214.606 65.8137 214.378 66.2129 214.378 66.498C214.378 66.669 214.435 66.9542 214.549 67.1252C228.756 80.4305 243.864 93.5731 258.5 107C260.7 109.018 263.279 112.02 265.432 114H224.432C224.432 114 204.215 95.9145 194.362 86.913C194.191 86.799 193.963 86.6279 193.735 86.5708C193.621 86.5138 193.45 86.5708 193.336 86.5708C193.05 86.5708 192.879 86.4568 192.537 86.7419C190.769 87.9965 188.83 90.2775 187.177 91.9312C185.409 93.5849 183.641 95.4098 181.93 97.0635C176.228 102.424 169.841 108.126 163.91 112.289C162.998 112.916 161.972 113.259 161.002 113.259L153 110C152 109.5 152.619 108.514 152.619 108.012C152.562 107.613 151.821 107.328 151.479 107.328C148.229 107.328 139.5 114 136.823 114L135 114C133.115 114 122.06 103.352 125 101C133.941 93.7785 146.06 89.0816 154.9 82.0088C155.186 81.7807 163 68 165.5 68C166.5 68 172.5 75.3289 172.5 75.5C172.5 85.6763 188.586 74.3883 173 71C172.202 70.8289 165.114 62.9124 165 62L164.196 60.2252C161.352 60.2252 153 51.5 153 51.5C151.165 48.5639 154.411 46.2034 149.996 44.9424C148.977 44.6366 149.022 43.3093 148.514 42.5474C147.772 41.0077 146.005 40.0953 144.75 39.2399C144.18 38.8408 143.552 38.4986 143.039 38.0424C139.732 35.0771 128.81 26.0671 128.81 26.0671L122 19L161.5 20Z" stroke="url(#paint1_linear_2066_13849)" />
                </g>
                <path d="M114.81 26L108 19L86.713 25V56.1749H34.3602L35.3602 26L28.5 19L7 25L1 107L8 114H35.3602V80.0628H86.713L81 107L87.713 114H114.81V26Z" fill="url(#paint2_linear_2066_13849)" stroke="url(#paint3_linear_2066_13849)" />
                <path d="M108 19H81L81 50.1749L28.5 50.1749L28.5 19H1V107L28.5 107L28.5 73.0628L81 73.0628L81 107H108V19Z" fill="black" stroke="url(#paint4_linear_2066_13849)" />
                <path d="M477.024 20C435.296 20 407.5 34.063 407.5 64.5C407.5 94.937 435.296 114 477.024 114C518.624 114 539.616 100.373 539.616 69.9363C539.616 39.4993 518.624 20 477.024 20ZM477.024 91.8408C450.4 91.8408 440.8 88.275 440.8 69.9363C440.8 51.5977 450.4 48.1592 477.024 48.1592C503.648 48.1592 513.248 51.5977 513.248 69.9363C513.248 88.275 503.648 91.8408 477.024 91.8408Z" fill="url(#paint5_linear_2066_13849)" stroke="url(#paint6_linear_2066_13849)" />
                <path d="M470.024 19C428.296 19 407.432 32.4993 407.432 62.9363C407.432 93.3734 428.296 107 470.024 107C511.624 107 532.616 93.3734 532.616 62.9363C532.616 32.4993 511.624 19 470.024 19ZM470.024 84.8408C443.4 84.8408 433.8 81.275 433.8 62.9363C433.8 44.5977 443.4 41.1592 470.024 41.1592C496.648 41.1592 506.248 44.5977 506.248 62.9363C506.248 81.275 496.648 84.8408 470.024 84.8408Z" fill="black" stroke="url(#paint7_linear_2066_13849)" />
                <path d="M388.265 96.8998C382.218 90.7175 377.932 86.5605 374.909 84.3244C389.368 81.4305 398.911 71.1181 398.911 57.438C398.911 32.3139 372.675 19.5 352.696 19.5L296.176 25L272.5 42L279.432 48.8879H355.93C365.262 48.8879 370.914 52.3079 370.914 59.148C370.914 65.1988 364.342 69.0135 355.93 69.0135L278.432 68.0135L272.5 107L279.432 114H306.64V90.7175H348.438L361 107L368.023 114H404.432L388.265 96.8998Z" fill="url(#paint8_linear_2066_13849)" stroke="url(#paint9_linear_2066_13849)" />
                <path d="M381.265 89.8998C375.218 83.7175 371.932 80.5605 368.909 78.3244C383.368 75.4305 391.911 64.1181 391.911 50.438C391.911 25.3139 366.675 19 346.696 19H300.176L272.5 42L348.93 41.8879C358.262 41.8879 363.914 45.3079 363.914 52.148C363.914 58.1988 357.342 62.0135 348.93 62.0135H272.5L272.5 107L299.64 107V83.7175H341.438L361.023 107H397.432L381.265 89.8998Z" fill="black" stroke="url(#paint10_linear_2066_13849)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M161.5 20C161.664 20 165.763 24.4789 165.936 24.5C165.936 24.5 168.639 27.2144 168.929 28.5192C169.214 29.7167 170.868 31.1424 171.951 32.1118C177.004 36.6834 172.293 23.8598 174 24.5C177.5 26 182.654 39.1898 183.185 41.578C183.658 43.7033 182.176 35.5 185 35.5C186.369 35.5 193.05 44.0301 193.221 44.7144C193.507 45.7978 193.564 47.0524 193.735 48.2499C193.838 49.1821 194.065 51.7854 195.274 51.7854C196.301 51.7854 197.202 50.4951 197.889 49.8082C197.889 49.8082 197.889 49.8082 198.408 49.2055C198.408 49.2055 198.709 48.9041 199.011 48.6027C200.322 47.2916 199.011 48.6027 199.915 47.6986C202.326 45.2877 200.819 46.7945 201.12 46.4931C202.024 45.589 206.114 41.9011 208.281 40.0763C213.242 35.7423 224.283 26 224.283 26C235.834 26 244.949 19 256.5 19L263.432 26C247.287 39.2155 231.114 52.3971 214.948 65.5856C214.606 65.8137 214.378 66.2129 214.378 66.498C214.378 66.669 214.435 66.9542 214.549 67.1252C228.756 80.4305 243.864 93.5731 258.5 107C260.7 109.018 263.279 112.02 265.432 114H224.432C224.432 114 204.215 95.9145 194.362 86.913C194.191 86.799 193.963 86.6279 193.735 86.5708C193.621 86.5138 193.45 86.5708 193.336 86.5708C193.05 86.5708 192.879 86.4568 192.537 86.7419C190.769 87.9965 188.83 90.2775 187.177 91.9312C185.409 93.5849 183.641 95.4098 181.93 97.0635C176.228 102.424 164.931 111.337 159 115.5L153 110C152 109.5 152.619 108.514 152.619 108.012C152.562 107.613 151.821 107.328 151.479 107.328C148.229 107.328 139.5 114 136.823 114L128 107L129.5 105.5L124.5 101C133.441 93.7785 146.06 89.0816 154.9 82.0088C155.186 81.7807 163 68 165.5 68C166.5 68 172.5 75.3289 172.5 75.5C172.5 85.6763 188.586 74.3883 173 71C172.202 70.8289 165.114 62.9124 165 62L164.196 60.2252C161.352 60.2252 153 51.5 153 51.5C151.165 48.5639 154.411 46.2034 149.996 44.9424C148.977 44.6366 149.022 43.3093 148.514 42.5474C147.772 41.0077 146.005 40.0953 144.75 39.2399C144.18 38.8408 143.552 38.4986 143.039 38.0424C139.732 35.0771 128.81 26.0671 128.81 26.0671L122 19L161.5 20Z" fill="url(#paint11_linear_2066_13849)" stroke="url(#paint12_linear_2066_13849)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M159.363 19.0671C160.047 19.0671 160.93 19.2016 161.5 20C161.899 20.4561 161.815 21.0059 161.929 21.5192C162.214 22.7167 163.868 24.1424 164.951 25.1118C166.149 26.1952 166.662 26.8795 167.802 26.8795C167.916 26.8795 168.43 26.8795 168.772 26.7085C169.513 26.4234 170.026 25.568 170.768 24.9977C171.395 24.4275 172.136 24.1424 172.763 24.1424C176.955 24.1424 175.561 31.7697 176.185 34.578C176.641 36.2317 178.751 37.4292 180.006 37.4292C181.545 37.4292 183.085 35.1482 184.34 35.1482C185.708 35.1482 186.05 37.0301 186.221 37.7144C186.507 38.7978 186.564 40.0524 186.735 41.2499C186.838 42.1821 187.065 44.7854 188.274 44.7854C189.301 44.7854 190.202 43.4951 190.889 42.8082C190.889 42.8082 190.889 42.8082 191.408 42.2055C191.408 42.2055 191.709 41.9041 192.011 41.6027C193.322 40.2916 192.011 41.6027 192.915 40.6986C195.326 38.2877 193.819 39.7945 194.12 39.4931C195.024 38.589 199.114 34.9011 201.281 33.0763C206.242 28.7423 217.283 19 217.283 19C230.333 19 243.382 19 256.432 19C240.287 32.2155 224.114 45.3971 207.948 58.5856C207.606 58.8137 207.378 59.2129 207.378 59.498C207.378 59.669 207.435 59.9542 207.549 60.1252C223.891 75.4301 241.953 91.8429 258.432 107H217.432C217.432 107 197.215 88.9145 187.362 79.913C187.191 79.799 186.963 79.6279 186.735 79.5708C186.621 79.5138 186.45 79.5708 186.336 79.5708C186.05 79.5708 185.879 79.4568 185.537 79.7419C183.769 80.9965 181.83 83.2775 180.177 84.9312C178.409 86.5849 176.641 88.4098 174.93 90.0635C169.228 95.4239 162.841 101.126 156.91 105.289C155.998 105.916 154.972 106.259 154.002 106.259C153.603 106.259 152.691 106.145 152.691 105.46C152.691 104.662 153.945 103.978 154.572 103.407C155.086 102.894 155.713 102.438 156.34 101.982C159.762 99.2446 163.753 96.1082 167.061 92.6867C168.03 91.7173 168.943 90.4626 169.741 89.3792C170.711 87.9536 171.965 86.4139 172.079 84.9883C172.193 84.6461 172.364 84.0188 172.364 83.9048C172.364 83.2775 171.965 82.7643 171.452 82.7643C170.882 82.7643 169.57 83.5056 169.228 83.7337C164.78 86.8701 160.218 91.261 155.998 95.4239C155.029 96.3933 148.3 102.951 146.133 102.951C145.962 102.951 145.791 102.78 145.619 102.666V101.012C145.562 100.613 144.821 100.328 144.479 100.328C141.229 100.328 132.104 107 129.823 107H127.936C127.936 107 127.828 106.886 127.828 106.715C127.828 106.088 129.823 104.662 130.166 104.377C131.591 103.236 133.017 102.039 134.5 101.012C135.583 100.157 136.838 99.4157 137.978 98.5603C138.149 98.4462 138.548 97.933 138.548 97.6478C138.548 97.1916 138.092 97.1916 137.921 97.1916C136.609 97.1916 128.113 101.412 125.433 101.412C125.033 101.412 124.805 101.297 124.805 100.955C124.805 99.9859 131.135 94.9106 131.99 94.2263C134.956 91.8313 138.035 89.2652 141.114 86.8131C143.281 85.0453 145.619 83.2205 147.9 81.3957C149.782 79.856 151.892 78.2023 153.888 76.6055C154.173 76.3775 163.333 68 165.5 68C165.728 68 166 68.3289 166 68.5C166 69.7545 162.784 73.8113 162.328 74.3816C162.043 74.6667 157.595 80.4262 157.595 81.1675C157.595 81.4527 158.108 81.6238 158.222 81.6238C158.393 81.6238 159.363 81.2816 159.876 80.9965C162.328 79.7419 164.723 77.1188 167.232 75.0088C169.171 73.2981 171.68 71.1311 173.562 69.1352C174.075 68.622 174.189 67.9377 174.417 67.4245C174.531 66.9683 174.702 66.4551 174.759 65.9988V64.8583C174.474 63.0335 173.448 62.2922 172.079 62.2922C170.54 62.2922 169.171 63.1476 167.745 63.1476C167.574 63.1476 166.263 62.8625 166.263 62.8625C165.334 62.6635 163.925 61.4399 163.925 60.4104V56.2475C163.468 54.0806 161.986 52.769 160.332 52.769C160.161 52.769 157.367 53.2252 157.196 53.2252C155.086 53.2252 153.241 52.2108 152.5 50.5C151.759 48.7893 152.063 46.7813 151.664 45.1276C151.493 44.3863 151.208 43.759 150.752 43.0747C150.581 42.7326 149.725 41.8772 149.269 41.8772H147.387C145.505 41.478 145.848 39.254 144.251 38.3986C143.852 38.1706 143.396 38.0565 142.996 37.9424C142.426 37.7713 142.198 37.1441 141.97 36.7449C141.913 36.6308 141.913 36.4598 141.856 36.2887C141.799 36.0606 141.628 35.7185 141.514 35.5474C140.772 34.0077 139.005 33.0953 137.75 32.2399C137.18 31.8408 136.552 31.4986 136.039 31.0424C132.732 28.0771 122 19 122 19L159.363 19.0671Z" fill="black" stroke="url(#paint13_linear_2066_13849)" />
                <defs>
                  <filter id="filter0_f_2066_13849" x="102.794" y="0.46875" width="181.92" height="132.031" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="9" result="effect1_foregroundBlur_2066_13849" />
                  </filter>
                  <linearGradient id="paint0_linear_2066_13849" x1="264.936" y1="23" x2="126.269" y2="109.737" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF7DF2" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_2066_13849" x1="264.936" y1="23" x2="126.269" y2="109.737" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF7DF2" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_2066_13849" x1="103.441" y1="26.1452" x2="0.838607" y2="89.7063" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_2066_13849" x1="103.441" y1="26.1452" x2="0.838607" y2="89.7063" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_2066_13849" x1="97.3115" y1="25.6187" x2="1.64734" y2="85.7672" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_2066_13849" x1="526.418" y1="27.0699" x2="418.57" y2="105.452" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_2066_13849" x1="526.418" y1="27.0699" x2="418.57" y2="105.452" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_2066_13849" x1="520.111" y1="25.6187" x2="418.776" y2="100.16" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_2066_13849" x1="391.253" y1="26.6076" x2="283.057" y2="104.717" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint9_linear_2066_13849" x1="391.253" y1="26.6076" x2="283.057" y2="104.717" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint10_linear_2066_13849" x1="384.952" y1="25.6187" x2="283.679" y2="99.9651" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF80F2" />
                  </linearGradient>
                  <linearGradient id="paint11_linear_2066_13849" x1="264.936" y1="23.0632" x2="125.056" y2="109.199" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF7DF2" />
                  </linearGradient>
                  <linearGradient id="paint12_linear_2066_13849" x1="264.936" y1="23.0632" x2="125.056" y2="109.199" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF7DF2" />
                  </linearGradient>
                  <linearGradient id="paint13_linear_2066_13849" x1="257.96" y1="22.7053" x2="128.05" y2="106.148" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80FF7D" />
                    <stop offset="0.5" stop-color="#80FFFF" />
                    <stop offset="1" stop-color="#FF7DF2" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>
        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
            <NavElement
              label="Home"
              href="/"
              navigationStarts={() => setIsNavOpen(false)}
            />
            <NavElement
              label="Basics"
              href="/basics"
              navigationStarts={() => setIsNavOpen(false)}
            />
            <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
          </div>
          <label
            htmlFor="my-drawer"
            className="btn-gh items-center justify-between md:hidden mr-6"
            onClick={() => setIsNavOpen(!isNavOpen)}>
            <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div className={`h-0.5 w-8 bg-[#80ff7d] ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-[#80ff7d] ${isNavOpen ? 'hidden' : ''}`} />
              <div className={`h-0.5 w-8 bg-[#80ff7d] ${isNavOpen ? 'hidden' : ''}`} />
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-[#80ff7d] ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(45deg)" }}>
            </div>
            <div className={`absolute block h-0.5 w-8 animate-pulse bg-[#80ff7d] ${isNavOpen ? "" : "hidden"}`}
              style={{ transform: "rotate(135deg)" }}>
            </div>
          </label>
          <div>
            <span className="absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"></span>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-square btn-ghost text-right mr-4">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52">
              <li>
                <div className="form-control bg-opacity-100">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input type="checkbox" checked={autoConnect} onChange={(e) => setAutoConnect(e.target.checked)} className="toggle" />
                  </label>
                  <NetworkSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
