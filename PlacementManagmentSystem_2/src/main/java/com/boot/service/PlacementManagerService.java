package com.boot.service;

import java.util.List;

import com.boot.payload.PlacementManagerDTO;

public interface PlacementManagerService 
{
	  public PlacementManagerDTO addplacementmanager(PlacementManagerDTO placementmanager);
	  
	  public List<PlacementManagerDTO> getAllplacementmanagerList();
	  
	  public PlacementManagerDTO getPlacementManagerById(int managerId);
	  
	  public void deletePlacementManagerById(int managerId);
	  
	  public PlacementManagerDTO updatePlacementManagerByID(PlacementManagerDTO placementmanager, int managerId);

}
