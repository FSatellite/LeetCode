#include "pch.h"
#include "MoveZeroes.h"


MoveZeroes::MoveZeroes()
{
}


MoveZeroes::~MoveZeroes()
{
}

void MoveZeroes::moveZeroes(vector<int>& nums)
{
	if (nums.size() == 0)
		return;
	int index = 0;//记录0的个数
	for (size_t i = 0; i < nums.size(); i++)
	{
		if (nums[i] != 0)
			nums[index++] = nums[i];
	}
	for (size_t i = index; i < nums.size(); i++)
	{
		nums[i] = 0;
	}
}