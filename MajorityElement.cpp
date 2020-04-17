#include "pch.h"
#include "MajorityElement.h"


MajorityElement::MajorityElement()
{

}


MajorityElement::~MajorityElement()
{

}

//¹þÏ£±í
int MajorityElement::majorityElement(vector<int>& nums)
{
	unordered_map<int, int> keyMap;
	int nMajorityElement = 0;
	for (size_t i = 0; i < nums.size(); i++)
	{
		keyMap[nums[i]]++;
		if (keyMap[nums[i]] > nums.size() / 2)
		{
			nMajorityElement = nums[i];
			break;
		}
	}
	return nMajorityElement;
}

//Ä¦¶ûÍ¶Æ±·¨
int MajorityElement::majorityElementMol(vector<int>& nums)
{
	int count = 1;
	int nMajorityElement = nums[0];
	for (size_t i = 1; i < nums.size(); i++)
	{
		if (nMajorityElement == nums[i])
			count++;
		else
		{
			count--;
			if (count == 0)
				nMajorityElement = nums[i + 1];
		}
	}
	return nMajorityElement;
}