#include "pch.h"
#include "DisappearedNumbers.h"
#include<algorithm>
//#include<cmath>

DisappearedNumbers::DisappearedNumbers()
{
}


DisappearedNumbers::~DisappearedNumbers()
{
}

vector<int> DisappearedNumbers::findDisappearedNumbers(vector<int>& nums)
{
	//利用set求差集
	/*set<int> fullSet;
	set<int> subSet;
	for (size_t i = 1; i <= nums.size(); i++)
	{
		fullSet.insert(i);
		subSet.insert(nums[i - 1]);
	}*/

	vector<int> result;
	//set_difference(fullSet.begin(), fullSet.end(), subSet.begin(), subSet.end(), back_inserter(result));

	for (size_t i = 0; i < nums.size(); i++)
	{
		if (nums[abs(nums[i]) - 1] > 0)
			nums[abs(nums[i]) - 1] = -nums[abs(nums[i]) - 1];
	}
	for (size_t i = 0; i < nums.size(); i++)
	{
		if (nums[i] > 0)
			result.push_back(i + 1);
	}

	return result;
}

