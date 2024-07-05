"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[78227],{15472:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>n,contentTitle:()=>N,default:()=>M,frontMatter:()=>i,metadata:()=>t,toc:()=>s});var L=a(74848),T=a(28453);const i={title:"LiveSurfacePerf"},N=void 0,t={id:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/LiveSurfacePerf",title:"LiveSurfacePerf",description:"V8 Message Definition",source:"@site/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/LiveSurfacePerf.md",sourceDirName:"MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf",slug:"/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfacePerf/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LiveSurfacePerf"},sidebar:"messageSchemasSidebar",previous:{title:"LiveSurfaceFixedTerm",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/LiveSurfaceFixedTerm/"},next:{title:"OptExpiryDefinition",permalink:"/docs/MessageSchemas/Schema/SRSE Products/SRAnalytics/OptExpiryDefinition/"}},n={},s=[];function O(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,T.R)(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(r.p,{children:(0,L.jsx)(r.a,{href:"../../../Topics/analytics/LiveSurfacePerf",children:"V8 Message Definition"})}),"\n",(0,L.jsx)(r.pre,{children:(0,L.jsx)(r.code,{className:"language-sql",children:"CREATE TABLE `SRAnalytics`.`MsgLiveSurfacePerf` (\n    `ekey_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None',\n    `ekey_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None',\n    `ekey_tk` VARCHAR(12) NOT NULL DEFAULT '',\n    `ekey_yr` SMALLINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_mn` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `ekey_dy` TINYINT UNSIGNED NOT NULL DEFAULT 0,\n    `perfSurfType` ENUM('None','Live','PriorDay') NOT NULL DEFAULT 'None' COMMENT 'Preferred surface type: None; Live; PriorDay',\n    `date` VARCHAR(10) NOT NULL DEFAULT '',\n    `time` VARCHAR(8) NOT NULL DEFAULT '',\n    `ticker_at` ENUM('None','EQT','IDX','BND','CUR','COM','FUT','SYN','WAR','FLX','MUT','SPD','MM','MF','COIN','TOKEN','ANY') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock underlier stock key',\n    `ticker_ts` ENUM('None','SR','NMS','CME','ICE','CFE','CBOT','NYMEX','COMEX','RUT','CIDX','ARCA','NYSE','OTC','NSDQ','MFQS','MIAX','DJI','CUSIP','ISIN','BXE','ESX','ANY','CXE','DXE','NXAM','NXBR','NXDUB','NXLS','NXLDN','NXML','NXMLT','NXOS','NXP','EUREX','CEDX','ICEFE') NOT NULL DEFAULT 'None' COMMENT 'SpiderRock underlier stock key',\n    `ticker_tk` VARCHAR(12) NOT NULL DEFAULT '' COMMENT 'SpiderRock underlier stock key',\n    `exType` ENUM('None','American','European','Asian','Cliquet') NOT NULL DEFAULT 'None',\n    `modelType` ENUM('None','LogNormalExact','NormalExact','LogNormalApprox','NormalApprox') NOT NULL DEFAULT 'None',\n    `uMark` FLOAT NOT NULL DEFAULT 0 COMMENT 'current underlier mark (usually mid market)',\n    `years` FLOAT NOT NULL DEFAULT 0 COMMENT 'time to expiration (in years)',\n    `rate` FLOAT NOT NULL DEFAULT 0 COMMENT 'interest rate',\n    `sdiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'stock dividend (borrow rate)',\n    `ddiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'present value of discrete dividend stream',\n    `eventCnt` FLOAT NOT NULL DEFAULT 0 COMMENT 'number of qualifying earnings (or earnings like) events (between now and expiration) [can be fractional]',\n    `iEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'implied event move (if any)',\n    `hEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'average of the trailing 12 historical (quarterly) earnings moves (if any)',\n    `strike` FLOAT NOT NULL DEFAULT 0 COMMENT 'atm strike = uMark * Math.Exp(years * rate) - ddiv;',\n    `cIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'call surface atm vol @ strike = uMark',\n    `pIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'put surface atm vol @ strike = uMark',\n    `cSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option price @ (cAtm, uMark, years, sdiv, rate, ddiv);strike = uMark',\n    `pSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option price @ (pAtm, uMark, years, sdiv, rate, ddiv);strike = uMark',\n    `cDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call delta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call gamma @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call theta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call vega @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `cRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface call rho @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `pDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put delta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put gamma @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put theta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put vega @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `pRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'surface put rho @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `xxCnt` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'number of valid surface strikes',\n    `pwidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'minimum mkt premium width',\n    `vwidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'minimum mkt volatility width',\n    `fixCIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike call surface atm vol @ strike = prvUMark',\n    `fixPIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike put surface atm vol @ strike = prvUMark',\n    `fixCSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike call option price @ (fixCAtm, uMark, years, sdiv, rate, ddiv);strike = prvUMark',\n    `fixPSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'fixed strike put option price @ (fixPAtm, uMark, years, sdiv, rate, ddiv);strike = prvUMark',\n    `prvUMark` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period underlier mark',\n    `prvYears` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period years to expiration',\n    `prvSDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period sdiv',\n    `prvRate` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period rate',\n    `prvDDiv` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period ddiv',\n    `prvStrike` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period atm strike = prvUMark * Math.Exp(years * rate) - ddiv;',\n    `prvEventCnt` FLOAT NOT NULL DEFAULT 0 COMMENT 'number of qualifying earnings (or earnings like) events (between now and expiration) [can be fractional]',\n    `prvIEMove` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period implied event move (if any)',\n    `prvCIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface cAtm @ strike = prvMark',\n    `prvPIVol` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface pAtm @ strike = prvMark',\n    `prvCSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period call surface price @ strike = prvUMark',\n    `prvPSOpx` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period put surface price @ strike = prvUMark',\n    `prvCDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call delta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call gamma @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call theta @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call vega @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvCRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface call rho @ (cAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPDe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put delta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPGa` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put gamma @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPTh` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put theta @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPVe` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put vega @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvPRo` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period surface put rho @ (pAtm, uMark, years, sdiv, rate, ddiv)',\n    `prvXXCnt` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'prior period number of valid surface strikes',\n    `prvPWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period minimum mkt premium width',\n    `prvVWidth` FLOAT NOT NULL DEFAULT 0 COMMENT 'prior period minimum mkt volatility width',\n    `cOptPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'call option pnl (fixCOpx - prvCOpx)',\n    `pOptPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'put option pnl (fixPOpx - prvPOpx)',\n    `dUPrc` FLOAT NOT NULL DEFAULT 0 COMMENT 'uMark - prvUMark',\n    `cDePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCDe * dUPrc',\n    `cGaPnL` FLOAT NOT NULL DEFAULT 0 COMMENT '0.5 * prvCGa * dUPrc * dUPrc',\n    `cThPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCTh * (years - prvYears)',\n    `cVePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCVe * (sVol - prvSVol)',\n    `cRoPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvCRo * (sdiv - prvSDiv)',\n    `pDePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPDe * dUPrc',\n    `pGaPnL` FLOAT NOT NULL DEFAULT 0 COMMENT '0.5 * prvPGa * dUPrc * dUPrc',\n    `pThPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPTh * (years - prvYears)',\n    `pVePnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPVe * (sVol - prvSVol)',\n    `pRoPnL` FLOAT NOT NULL DEFAULT 0 COMMENT 'prvPRo * (sdiv - prvSDiv)',\n    `timestamp` DATETIME(6) NOT NULL DEFAULT '1900-01-01 00:00:00.000000',\n    PRIMARY KEY USING HASH (`ekey_tk`,`ekey_yr`,`ekey_mn`,`ekey_dy`,`ekey_at`,`ekey_ts`,`perfSurfType`)\n) ENGINE=SRSE DEFAULT CHARSET=LATIN1 COMMENT='LiveSurfacePerf records contain current and prior period implied ATM volatilities and greeks and as well as fixed-strike PnL values.  The strike used for the fix-strike calculation is equal to the forward underlier price that prevailed on the open.  Note that this strike price \\'resets\\' each day.\\nLiveSurfacePerf records are published to the SpiderRock elastic cluster at the end of the day for each option expiration.  These records are designed to allow fixed strike EOD to EOD attributed PnL to be easily calculated.  These records can also be used to measure atm volatility dynamics.';\n\n"})})]})}function M(e={}){const{wrapper:r}={...(0,T.R)(),...e.components};return r?(0,L.jsx)(r,{...e,children:(0,L.jsx)(O,{...e})}):O(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>N,x:()=>t});var L=a(96540);const T={},i=L.createContext(T);function N(e){const r=L.useContext(i);return L.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(T):e.components||T:N(e.components),L.createElement(i.Provider,{value:r},e.children)}}}]);