const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '../package.json');

// 获取当前版本号
const package = require(packagePath);
const currentVersion = package.version;

//自动增加版本号1
const versionArray = currentVersion.split('.');
const lastVersionIndex = versionArray.length - 1;

versionArray[lastVersionIndex] = String(parseInt(versionArray[lastVersionIndex]) + 1);

//自动生成版本号
const autoVersion = versionArray.join('.')

// 获取输入的版本号，如果没有输入则使用默认版本号
const newVersion = process.argv[2] || autoVersion;

// 更新 package.json 中的版本号
const newPackage = {
  ...package,
  version: newVersion,
};

fs.writeFileSync(packagePath, JSON.stringify(newPackage, null, 2));

console.log(`版本号已从 ${currentVersion} 更新为 ${newVersion}`);
